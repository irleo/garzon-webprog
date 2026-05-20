const User = require("../models/User");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken"); // For generating tokens

const normalizeUserPayload = (payload) => {
  const nextPayload = { ...payload };

  if (nextPayload.role && !nextPayload.type) {
    nextPayload.type = nextPayload.role;
  }

  delete nextPayload.role;
  return nextPayload;
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude the password field
    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    // Ensure the password is included in the request body
    if (!req.body.password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const payload = normalizeUserPayload(req.body);

    // Create the user with the hashed password
    const user = await User.create({ ...payload, password: hashedPassword });
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json(userResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const payload = normalizeUserPayload(req.body);

    // Check if the password is being updated
    if (payload.password) {
      // Hash the new password
      payload.password = await bcrypt.hash(payload.password, 10);
    }

    // Update the user with the new data
    const user = await User.findByIdAndUpdate(req.params.id, payload, {
      new: true,
    }).select("-password");

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user is active
    if (!user.isActive) {
      return res
        .status(403)
        .json({ message: "Your account is inactive. Please contact support." });
    }

    if (user.type === "viewer") {
      return res.status(403).json({ message: "Viewers cannot log in." });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, type: user.type }, // Include type in the token
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({
      message: "Login successful",
      token,
      type: user.type,
      firstName: user.firstName,
    }); // Include type in the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, loginUser, };
