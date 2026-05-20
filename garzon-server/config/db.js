const mongoose = require('mongoose');

let cachedConnection = null;

const connectDB = async () => {
    // Connect MongoDB at default port 27017.
    if (cachedConnection) {
        return cachedConnection;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {

        });
        cachedConnection = conn;
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
};

module.exports = connectDB;
