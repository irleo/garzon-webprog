import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300",
    isActive
      ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.35)]"
      : "text-foreground/70 hover:bg-card hover:text-foreground hover:shadow-[0_0_10px_rgba(139,92,246,0.18)]",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <NavLink to="/" className="group flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(139,92,246,0.25)]">
            <div className="h-11 w-11 overflow-hidden rounded-full border border-border bg-card shadow-sm">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-0.5">
            Leoniverse
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              Cosmic Themed Blog
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-5 p-1.5 md:flex">
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
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
