import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.jpg";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const authLinks = [
  { label: "Sign in", to: "/auth/signin" },
  { label: "Sign up", to: "/auth/signup" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "relative z-10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300",
    isActive
      ? "text-foreground text-glow"
      : "text-foreground/70 hover:text-foreground  hover:text-glow",
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
  const location = useLocation();
  const navRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeLink = links.find((link) => {
      if (link.to === "/") return location.pathname === "/";
      return location.pathname.startsWith(link.to);
    });

    if (!activeLink) return;

    const el = navRefs.current[activeLink.to];
    if (!el) return;

    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      const activeLink = links.find((link) => {
        if (link.to === "/") return location.pathname === "/";
        return location.pathname.startsWith(link.to);
      });

      if (!activeLink) return;

      const el = navRefs.current[activeLink.to];
      if (!el) return;

      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border text-foreground bg-cosmic">
      <div className="container flex items-center justify-between py-4">
        <NavLink to="/" className="group flex items-center gap-4">
          <div className="flex h-13 w-13 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all group-hover:shadow-[0_0_14px_rgba(139,92,246,0.25)]">
            <div className="h-13 w-13 overflow-hidden rounded-full border border-border bg-card shadow-sm ">
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
          <div className="relative flex items-center gap-2 rounded-full p-1.5">
            <span
              className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-primary transition-all duration-300 ease-out"
              style={{
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
              }}
            />

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                ref={(el) => {
                  navRefs.current[link.to] = el;
                }}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className=" me-4 h-6 w-px bg-foreground" />

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