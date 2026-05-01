import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import usersSeed from "../../data/users.json?raw";

const roles = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];

const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  role: "editor",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? "").trim(),
        lastName: String(user.lastName ?? "").trim(),
        age: String(user.age ?? "").trim(),
        gender: genders.includes(
          String(user.gender ?? "")
            .trim()
            .toLowerCase(),
        )
          ? String(user.gender ?? "")
              .trim()
              .toLowerCase()
          : "",
        contactNumber: String(user.contactNumber ?? "").trim(),
        email: String(user.email ?? "")
          .trim()
          .toLowerCase(),
        role: roles.includes(
          String(user.role ?? "")
            .trim()
            .toLowerCase(),
        )
          ? String(user.role ?? "")
              .trim()
              .toLowerCase()
          : "editor",
        username: String(user.username ?? "")
          .trim()
          .toLowerCase(),
        password: String(user.password ?? ""),
        address: String(user.address ?? "").trim(),
        isActive: typeof user.isActive === "boolean" ? user.isActive : true,
      })),
      error: "",
    };
  } catch {
    return {
      users: [],
      error: "Unable to read users from src/assets/users.json.",
    };
  }
};

const seed = loadUsers();

const panelSx = {
  borderRadius: "24px",
  backgroundColor: "hsl(var(--card) / 0.74)",
  border: "1px solid hsl(var(--border) / 0.85)",
  boxShadow: "0 24px 80px rgb(0 0 0 / 0.28)",
  backdropFilter: "blur(18px)",
  overflow: "hidden",
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card) / 0.55)",

    "& fieldset": {
      borderColor: "hsl(var(--border) / 0.85)",
    },

    "&:hover fieldset": {
      borderColor: "hsl(var(--primary) / 0.55)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "hsl(var(--primary))",
    },
  },

  "& .MuiInputBase-input": {
    color: "hsl(var(--foreground))",
  },

  "& .MuiInputLabel-root": {
    color: "hsl(var(--muted-foreground))",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "hsl(var(--primary))",
  },

  "& .MuiSvgIcon-root": {
    color: "hsl(var(--foreground))",
  },
};

const modalFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "transparent",
    color: "hsl(var(--foreground))",

    "& fieldset": {
      borderColor: "hsl(var(--border))",
    },

    "&:hover fieldset": {
      borderColor: "hsl(var(--primary) / 0.55)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "hsl(var(--primary))",
    },
  },

  "& .MuiInputBase-input": {
    color: "hsl(var(--foreground))",
  },

  "& .MuiInputLabel-root": {
    color: "hsl(var(--muted-foreground))",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "hsl(var(--primary))",
  },

  "& .MuiFormHelperText-root": {
    color: "#fca5a5",
  },

  "& .MuiSvgIcon-root": {
    color: "hsl(var(--foreground))",
  },
};

const dataGridSx = {
  minWidth: 980,
  border: "none",
  color: "hsl(var(--foreground))",
  backgroundColor: "transparent",

  "& .MuiDataGrid-main": {
    borderRadius: "18px",
    overflow: "hidden",
  },

  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "hsl(var(--primary) / 0.16)",
    borderBottom: "1px solid hsl(var(--border))",
  },

  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-columnHeaderTitle": {
    color: "hsl(var(--background))",
    fontWeight: 800,
  },

  "& .MuiDataGrid-cell": {
    color: "hsl(var(--foreground))",
    borderColor: "hsl(var(--border) / 0.65)",
  },

  "& .MuiDataGrid-row:hover": {
    backgroundColor: "hsl(var(--primary) / 0.08)",
  },

  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "hsl(var(--primary) / 0.22) !important",
  },

  "& .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell": {
    color: "hsl(var(--foreground)) !important",
  },

  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
    {
      outline: "none",
    },

  "& .MuiDataGrid-footerContainer": {
    borderColor: "hsl(var(--border))",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card) / 0.55)",
  },

  "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-actions button":
    {
      color: "hsl(var(--foreground))",
    },

  "& .MuiCheckbox-root": {
    color: "hsl(var(--muted-foreground))",
  },

  "& .MuiCheckbox-root.Mui-checked": {
    color: "hsl(var(--primary))",
  },

  "& .MuiDataGrid-menuIconButton, & .MuiDataGrid-sortIcon": {
    color: "hsl(var(--foreground))",
  },

  "& .MuiDataGrid-columnSeparator": {
    color: "hsl(var(--border))",
  },
};

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    role: "all",
    gender: "all",
    status: "all",
  });

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFilterChange = ({ target: { name, value } }) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();
    const age = form.age.trim();
    const contactNumber = form.contactNumber.trim();

    [
      ["firstName", "First name"],
      ["lastName", "Last name"],
      ["age", "Age"],
      ["gender", "Gender"],
      ["contactNumber", "Contact number"],
      ["email", "Email"],
      ["role", "Role"],
      ["username", "Username"],
      ["password", "Password"],
      ["address", "Address"],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!nextErrors.age && !/^\d+$/.test(age)) {
      nextErrors.age = "Age must be a number only.";
    }

    if (!nextErrors.contactNumber && !/^\d{11}$/.test(contactNumber)) {
      nextErrors.contactNumber = "Contact number must be exactly 11 digits.";
    }

    if (!nextErrors.username && /\s/.test(username)) {
      nextErrors.username = "Username must not contain spaces.";
    }

    if (!nextErrors.password && form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (
      !nextErrors.email &&
      users.some((user) => user.id !== modal.id && user.email === email)
    ) {
      nextErrors.email = "Email address already exists.";
    }

    if (
      !nextErrors.username &&
      users.some((user) => user.id !== modal.id && user.username === username)
    ) {
      nextErrors.username = "Username already exists.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((user) =>
            user.id === modal.id ? { ...user, ...nextUser } : user,
          )
        : [
            ...prev,
            {
              id:
                prev.reduce(
                  (max, user) => Math.max(max, Number(user.id) || 0),
                  0,
                ) + 1,
              ...nextUser,
            },
          ],
    );

    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user,
      ),
    );
  };

  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        !query ||
        [user.firstName, user.lastName, user.email, user.username]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesRole = filters.role === "all" || user.role === filters.role;
      const matchesGender =
        filters.gender === "all" || user.gender === filters.gender;
      const matchesStatus =
        filters.status === "all" ||
        (filters.status === "active" && user.isActive) ||
        (filters.status === "inactive" && !user.isActive);

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [users, searchTerm, filters]);

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    sx: modalFieldSx,
    ...extra,
  });

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: "username", headerName: "Username", minWidth: 150 },
    { field: "age", headerName: "Age", width: 90 },
    {
      field: "gender",
      headerName: "Gender",
      minWidth: 110,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: "contactNumber", headerName: "Contact Number", minWidth: 168 },
    { field: "email", headerName: "Email", flex: 1.1, minWidth: 220 },
    {
      field: "role",
      headerName: "Role",
      minWidth: 130,
      valueGetter: (_, row) => labelize(row.role),
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? "Active" : "Inactive"}
          sx={{
            fontWeight: 800,
            color: row.isActive
              ? "hsl(var(--primary-foreground))"
              : "hsl(var(--foreground))",
            backgroundColor: row.isActive
              ? "hsl(var(--primary) / 0.8)"
              : "hsl(var(--card) / 0.85)",
            border: "1px solid hsl(var(--border))",
          }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => openModal(row)}
            sx={{ textTransform: "none" }}
          >
            Edit
          </Button>

          <Button
            size="small"
            variant="contained"
            color={row.isActive ? "warning" : "success"}
            onClick={() => toggleStatus(row.id)}
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            {row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        overflowX: "hidden",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 3, width: "100%", maxWidth: "100%", minWidth: 0 }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.04em",
              textShadow: "0 0 18px hsl(var(--primary) / 0.28)",
            }}
          >
            Users
          </Typography>

          <Typography
            variant="body2"
            sx={{ mt: 0.5, color: "hsl(var(--muted-foreground))" }}
          >
            Search, filter, add, and manage user records.
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => openModal()}
          sx={{
            minHeight: 40,
            width: { xs: "100%", sm: "auto" },
            borderRadius: "14px",
            px: 2,
            textTransform: "none",
            fontWeight: 800,
            boxShadow: "0 0 18px hsl(var(--primary) / 0.22)",
            flexShrink: 0,
          }}
        >
          Add User
        </Button>
      </Stack>

      {seed.error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {seed.error}
        </Alert>
      ) : null}

      <Card sx={{ ...panelSx, mb: 2.5, maxWidth: "100%" }}>
        <CardContent sx={{ p: 2, minWidth: 0 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ width: "100%", minWidth: 0 }}
          >
            <TextField
              placeholder="Search by name, email, or username..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              fullWidth
              sx={{ ...inputSx, minWidth: 0, flex: 1 }}
            />

            <TextField
              select
              name="role"
              label="Role"
              value={filters.role}
              onChange={handleFilterChange}
              sx={{
                ...inputSx,
                width: { xs: "100%", md: 150 },
                flexShrink: 0,
              }}
            >
              <MenuItem value="all">All Roles</MenuItem>
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {labelize(role)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              name="gender"
              label="Gender"
              value={filters.gender}
              onChange={handleFilterChange}
              sx={{
                ...inputSx,
                width: { xs: "100%", md: 160 },
                flexShrink: 0,
              }}
            >
              <MenuItem value="all">All Genders</MenuItem>
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {labelize(gender)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              name="status"
              label="Status"
              value={filters.status}
              onChange={handleFilterChange}
              sx={{
                ...inputSx,
                width: { xs: "100%", md: 160 },
                flexShrink: 0,
              }}
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </TextField>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ ...panelSx, maxWidth: "100%" }}>
        <CardContent sx={{ p: 2, minWidth: 0, overflow: "hidden" }}>
          {filteredUsers.length ? (
            <Box
              sx={{
                height: { xs: 460, sm: 520 },
                width: "100%",
                maxWidth: "100%",
                minWidth: 0,
                overflowX: "auto",
                overflowY: "hidden",
              }}
            >
              <DataGrid
                rows={filteredUsers}
                columns={columns}
                disableRowSelectionOnClick
                pageSizeOptions={[5, 10]}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5, page: 0 } },
                }}
                sx={dataGridSx}
              />
            </Box>
          ) : (
            <Alert severity="info">
              No users match your current search or filters.
            </Alert>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        slotProps={{
          paper: {
            sx: {
              borderRadius: { xs: 0, sm: "18px" },
              backgroundColor: "hsl(var(--card))",
              color: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--border))",
              backgroundImage: "none",
            },
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle
            sx={{
              fontWeight: 850,
              letterSpacing: "-0.02em",
              color: "hsl(var(--foreground))",
            }}
          >
            {modal.id ? "Edit User" : "Add User"}
          </DialogTitle>

          <DialogContent
            dividers
            sx={{
              px: { xs: 2, sm: 3 },
              borderColor: "hsl(var(--border))",
            }}
          >
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("firstName", "First Name")} />
                <TextField {...fieldProps("lastName", "Last Name")} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("age", "Age")} />

                <TextField
                  {...fieldProps("gender", "Gender", { select: true })}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("contactNumber", "Contact Number")} />

                <TextField
                  {...fieldProps("email", "Email Address", {
                    type: "email",
                  })}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("role", "Role", { select: true })}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {labelize(role)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField {...fieldProps("username", "Username")} />
              </Stack>

              <TextField
                {...fieldProps("password", "Password", {
                  type: showPassword ? "text" : "password",
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(event) => event.preventDefault()}
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />

              <TextField
                {...fieldProps("address", "Address", {
                  multiline: true,
                  rows: 3,
                })}
              />

              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                }
                label={
                  form.isActive
                    ? "User status: Active"
                    : "User status: Inactive"
                }
                sx={{
                  color: "hsl(var(--foreground))",
                }}
              />
            </Stack>
          </DialogContent>

          <DialogActions
            sx={{
              px: 3,
              py: 2,
              borderTop: "1px solid hsl(var(--border))",
            }}
          >
            <Button
              onClick={closeModal}
              sx={{
                color: "hsl(var(--foreground))",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 800,
              }}
            >
              {modal.id ? "Update User" : "Save User"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;