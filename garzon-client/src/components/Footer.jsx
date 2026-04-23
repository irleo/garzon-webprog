import { NavLink } from "react-router-dom";
import { Mail, Sparkles } from "lucide-react";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const InstagramIcon = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
  </svg>
);

const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.85 10.92.57.1.78-.25.78-.56 0-.28-.01-1.2-.02-2.18-3.19.7-3.86-1.35-3.86-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.19 1.75 1.19 1.02 1.76 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 5.78 0c2.2-1.5 3.16-1.19 3.16-1.19.63 1.59.24 2.77.12 3.06.74.81 1.18 1.85 1.18 3.11 0 4.44-2.69 5.42-5.26 5.7.41.36.77 1.06.77 2.15 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.79.56a11.53 11.53 0 0 0 7.84-10.92C23.5 5.66 18.35.5 12 .5Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary-foreground bg-cosmic text-foreground">
      <div className="cosmic-decor"/>
        
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_0_18px_rgba(139,92,246,0.16)]">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-wide text-foreground">
                  Leoniverse
                </h2>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Cosmic Themed Blog
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              A quiet corner of the universe for stories, ideas, and explorations
              inspired by design, code, and curiosity.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className="w-fit text-sm text-zinc-600 transition-colors duration-300 hover:text-violet-500"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Connect
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full border border-zinc-200 bg-white p-3 text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-500 hover:shadow-[0_0_16px_rgba(139,92,246,0.22)]"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                className="rounded-full border border-zinc-200 bg-white p-3 text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-500 hover:shadow-[0_0_16px_rgba(139,92,246,0.22)]"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>

              <a
                href="#"
                className="rounded-full border border-zinc-200 bg-white p-3 text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-500 hover:shadow-[0_0_16px_rgba(139,92,246,0.22)]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Drifting through ideas, one post at a time.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs uppercase tracking-[0.24em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Leoniverse</p>
          <p>Made with stars, stories, and code</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;