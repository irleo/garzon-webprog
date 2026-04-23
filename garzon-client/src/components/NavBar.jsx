import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "border-b-2  px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300",
    isActive
      ? "text-foreground text-glow border-b-2 border-primary"
      : "text-foreground/70 hover:text-foreground hover:text-glow border-transparent",
  ].join(" ");

const authLinkClassName = ({ isActive }) =>
  [
    "border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300",
    isActive
      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_14px_rgba(139,92,246,0.35)]"
      : "border-primary/30 bg-white/5 text-foreground shadow-[0_0_10px_rgba(139,92,246,0.10)] backdrop-blur-md hover:border-primary/50 hover:bg-primary/20 hover:text-foreground",
  ].join(" ");

const signUpLinkClassName = ({ isActive }) =>
  [
    "border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300",
    isActive
      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_16px_rgba(139,92,246,0.4)]"
      : "border-primary/60 bg-primary/80 text-primary-foreground shadow-[0_0_16px_rgba(139,92,246,0.25)] hover:bg-primary/60",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-cosmic text-foreground">
      <div className="container flex items-center justify-between py-4">
        <NavLink to="/" className="group flex items-center gap-4">
          <div className="flex h-13 w-13 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all group-hover:shadow-[0_0_14px_rgba(139,92,246,0.25)]">
            <div className="h-13 w-13 overflow-hidden rounded-full border border-border bg-card shadow-sm">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full object-cover p-1"
              />
            </div>
          </div>

          <div className="space-y-0.5 hover:text-glow">
            <h1 className="text-xl">Leoniverse</h1>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              Cosmic Themed Blog
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 p-1.5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="me-4 h-6 w-px bg-foreground/40" />

          <NavLink to="/auth/signin" className={authLinkClassName}>
            Sign in
          </NavLink>

          <NavLink to="/auth/signup" className={signUpLinkClassName}>
            Sign up
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;