import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 268;

const dashboardNavItems = [
  {
    label: "Dashboard",
    title: "Dashboard",
    to: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Reports",
    title: "Reports",
    to: "/dashboard/reports",
    icon: AssessmentIcon,
  },
  { label: "Users", title: "Users", to: "/dashboard/users", icon: PeopleIcon },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  overflowX: "hidden",
  backgroundColor: "hsl(var(--card) / 0.55)",
  borderRight: "1px solid hsl(var(--border) / 0.6)",
  backdropFilter: "blur(28px)",
  boxShadow: "4px 0 40px rgb(0 0 0 / 0.25)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  overflowX: "hidden",
  backgroundColor: "hsl(var(--card) / 0.55)",
  borderRight: "1px solid hsl(var(--border) / 0.6)",
  backdropFilter: "blur(28px)",
  boxShadow: "4px 0 40px rgb(0 0 0 / 0.25)",
  width: `calc(${theme.spacing(8)} + 1px)`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 10px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  minHeight: "72px",
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "hsl(var(--background) / 0.45)",
  color: "hsl(var(--foreground))",
  borderBottom: "1px solid hsl(var(--border) / 0.5)",
  backdropFilter: "blur(28px)",
  boxShadow: "0 1px 0 hsl(var(--border) / 0.4), 0 8px 32px rgb(0 0 0 / 0.18)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    color: "hsl(var(--foreground))",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "14px",
  backgroundColor: "hsl(var(--card) / 0.6)",
  border: "1px solid hsl(var(--border) / 0.7)",
  color: "hsl(var(--foreground))",
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  transition: "all 0.2s ease",
  "&:hover, &:focus-within": {
    backgroundColor: "hsl(var(--card) / 0.85)",
    borderColor: "hsl(var(--primary) / 0.5)",
    boxShadow: "0 0 0 3px hsl(var(--primary) / 0.1)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "hsl(var(--muted-foreground))",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "hsl(var(--foreground))",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.1, 1.5, 1.1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3.5)})`,
    fontSize: "0.875rem",
    width: "100%",
    "&::placeholder": {
      color: "hsl(var(--muted-foreground))",
      opacity: 1,
    },
    [theme.breakpoints.up("md")]: {
      width: "22ch",
    },
  },
}));

const getPageTitle = (pathname) =>
  dashboardNavItems.find(({ to }) => to === pathname)?.title ?? "Welcome";

const DashLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const navigate = useNavigate();

  const handleLogout = () => navigate("/");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--cosmic-bg)",
        color: "hsl(var(--foreground))",
        position: "relative",
        overflow: "hidden",

        /* Ambient glow at top */
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "400px",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.14), transparent 70%)",
          zIndex: 0,
        },

        "& *": { boxSizing: "border-box" },
        "& .MuiTypography-root": { color: "hsl(var(--foreground))" },
        "& .MuiPaper-root": { backgroundImage: "none" },
        "& .MuiCard-root": {
          backgroundColor: "hsl(var(--card) / 0.74)",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border) / 0.9)",
          borderRadius: "24px",
          boxShadow: "0 24px 80px rgb(0 0 0 / 0.28)",
          backdropFilter: "blur(18px)",
        },
        "& .MuiDataGrid-root": {
          color: "hsl(var(--foreground))",
          borderColor: "hsl(var(--border))",
          backgroundColor: "hsl(var(--card) / 0.58)",
          borderRadius: "20px",
          overflow: "hidden",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "hsl(var(--primary) / 0.12)",
          color: "hsl(var(--foreground))",
          borderColor: "hsl(var(--border))",
        },
        "& .MuiDataGrid-cell": {
          borderColor: "hsl(var(--border) / 0.75)",
          color: "hsl(var(--foreground))",
        },
        "& .MuiDataGrid-footerContainer": {
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))",
        },
        "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
          { color: "hsl(var(--foreground))" },
        "& .MuiCheckbox-root": { color: "hsl(var(--muted-foreground))" },
        "& .MuiCheckbox-root.Mui-checked": { color: "hsl(var(--primary))" },
        "& .MuiSvgIcon-root": { color: "inherit" },
      }}
    >
      <CssBaseline />

      {/* ── AppBar ── */}
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar
          sx={{ minHeight: "72px !important", px: { xs: 2, md: 2.5 }, gap: 1 }}
        >
          {/* Hamburger */}
          <IconButton
            onClick={() => setOpen((p) => !p)}
            edge="start"
            sx={{
              width: 42,
              height: 42,
              ml: 0.1,
              borderRadius: "12px",
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--card) / 0.7)",
              border: "1px solid hsl(var(--border) / 0.7)",
              flexShrink: 0,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "hsl(var(--primary) / 0.15)",
                borderColor: "hsl(var(--primary) / 0.5)",
                boxShadow: "0 0 16px hsl(var(--primary) / 0.2)",
              },
            }}
          >
            {open ? (
              <MenuOpenIcon fontSize="small" />
            ) : (
              <MenuIcon fontSize="small" />
            )}
          </IconButton>

          {/* Page title */}
          <Box sx={{ flexGrow: 1, pl: 1 }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              {pageTitle}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "hsl(var(--muted-foreground))",
                display: { xs: "none", sm: "block" },
                letterSpacing: "0.01em",
              }}
            >
              Real-time workspace overview
            </Typography>
          </Box>

          {/* Search */}
          <Search
            sx={{
              display: { xs: "none", md: "block" },
              alignItems: "center",
              height: 40,
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: 17 }} />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Logout */}
          <Button
            onClick={handleLogout}
            startIcon={<LogoutIcon sx={{ fontSize: "16px !important" }} />}
            sx={{
              borderRadius: "12px",
              px: 2,
              py: 0.9,
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--card) / 0.7)",
              border: "1px solid hsl(var(--border) / 0.7)",
              flexShrink: 0,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "hsl(var(--primary) / 0.15)",
                borderColor: "hsl(var(--primary) / 0.5)",
                boxShadow: "0 0 16px hsl(var(--primary) / 0.2)",
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* ── Sidebar ── */}
      <Drawer variant="permanent" open={open}>
        {/* Brand header */}
        <DrawerHeader
          sx={{
            minHeight: "72px !important",
            px: 2,
            justifyContent: "space-between",
          }}
        ></DrawerHeader>

        {/* Nav items */}
        <List sx={{ px: open ? 1.5 : 2, py: 2, flexGrow: 1 }}>
          {dashboardNavItems.map(({ label, to, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <ListItem
                key={to}
                disablePadding
                sx={{ display: "block", mb: 0.5 }}
              >
                <ListItemButton
                  component={Link}
                  to={to}
                  selected={active}
                  sx={{
                    minHeight: 54,
                    px: open ? 2 : 1.5,
                    borderRadius: "14px",
                    justifyContent: open ? "initial" : "center",
                    color: active
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--muted-foreground))",
                    backgroundColor: active
                      ? "hsl(var(--primary) / 0.15)"
                      : "transparent",
                    border: active
                      ? "1px solid hsl(var(--primary) / 0.4)"
                      : "1px solid transparent",
                    transition: "all 0.18s ease",

                    "&:hover": {
                      color: "hsl(var(--foreground))",
                      backgroundColor: active
                        ? "hsl(var(--primary) / 0.2)"
                        : "hsl(var(--foreground) / 0.05)",
                      borderColor: active
                        ? "hsl(var(--primary) / 0.55)"
                        : "hsl(var(--border) / 0.6)",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "hsl(var(--primary) / 0.15)",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                      color: active
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground))",
                    }}
                  >
                    <Icon fontSize="medium" />
                  </ListItemIcon>

                  <ListItemText
                    primary={label}
                    sx={{
                      opacity: open ? 1 : 0,
                      "& .MuiListItemText-primary": {
                        fontWeight: active ? 750 : 500,
                        fontSize: "0.9rem",
                      },
                    }}
                  />

                  {/* Active indicator dot */}
                  {active && open && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "hsl(var(--primary))",
                        boxShadow: "0 0 8px hsl(var(--primary) / 0.7)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* User profile */}
        {open ? (
          <Box
            sx={{
              mx: 1.5,
              mb: 2,
              p: 1.5,
              borderRadius: "18px",
              backgroundColor: "hsl(var(--card) / 0.6)",
              border: "1px solid hsl(var(--border) / 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                fontWeight: 900,
                fontSize: "0.85rem",
                flexShrink: 0,
              }}
            >
              A
            </Avatar>
            <Box sx={{ minWidth: 0, flexGrow: 1 }}>
              <Typography
                sx={{ fontWeight: 750, fontSize: "0.875rem", lineHeight: 1.2 }}
                noWrap
              >
                Admin Account
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "hsl(var(--muted-foreground))", lineHeight: 1 }}
                noWrap
              >
                Workspace administrator
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 2,
            }}
          >
            <Avatar
              sx={{
                width: 34,
                height: 34,
                bgcolor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                fontWeight: 900,
                fontSize: "0.8rem",
              }}
            >
              A
            </Avatar>
          </Box>
        )}
      </Drawer>

      {/* ── Main content ── */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <DrawerHeader sx={{ minHeight: "72px !important" }} />

        <Box
          sx={{
            width: "100%",
            maxWidth: "1500px",
            mx: "auto",
            px: { xs: 2, md: 4 },
            pt: { xs: 2, md: 3 },
            pb: { xs: 4, md: 6 },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashLayout;
