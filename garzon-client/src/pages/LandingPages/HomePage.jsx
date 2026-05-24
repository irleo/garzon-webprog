import Button from "../../components/Button";
import aboutme from "../../assets/images/aboutme.jpg";
import projects from "../../assets/images/projects.jpg";
import articles from "../../assets/images/articles.jpg";

const stats = [
  { value: "10", label: "Projects" },
  { value: "3", label: "Core Pages" },
  { value: "5", label: "Technologies" },
  { value: "6", label: "Articles" },
];

const features = [
  {
    title: "About Me",
    description:
      "A closer look at my background, skills, and growth as a web developer.",
    image: aboutme,
    to: "/about",
  },
  {
    title: "Articles",
    description:
      "Notes and explainers about web development, programming, and design.",
    image: articles,
    to: "/articles",
  },
  {
    title: "Projects",
    description:
      "Selected builds using React, JavaScript, and modern frontend tools.",
    image: projects,
    to: "/projects",
  },
];

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[88vh] w-full overflow-hidden border-b border-border/50">
        {/* Orbital SVG */}
        <div className="pointer-events-none absolute -inset-y-15 right-1 w-[55%] opacity-70 -skew-y-26 -skew-x-12">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-hidden="true"
          >
            {/* Orbit rings */}
            <circle
              cx="250"
              cy="250"
              r="76"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeDasharray="3 6"
              opacity="0.22"
            />
            <circle
              cx="250"
              cy="250"
              r="118"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeDasharray="3 6"
              opacity="0.16"
            />
            <circle
              cx="250"
              cy="250"
              r="162"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeDasharray="3 6"
              opacity="0.12"
            />
            <circle
              cx="250"
              cy="250"
              r="210"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeDasharray="3 6"
              opacity="0.08"
            />
            <circle
              cx="250"
              cy="250"
              r="270"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeDasharray="3 6"
              opacity="0.28"
            />

            {/* Sun */}
            <g className="leo-sun">
              <circle cx="250" cy="250" r="30" fill="#ff8800" opacity="0.12" />
              <circle cx="250" cy="250" r="22" fill="#ffaa22" opacity="0.35" />
              <circle cx="250" cy="250" r="16" fill="#ffcc55" opacity="0.7" />
              <circle cx="250" cy="250" r="11" fill="#ffe899" />
            </g>

            {/* Planet 1 */}
            <g className="leo-o1" style={{ transformOrigin: "250px 250px" }}>
              <circle cx="250" cy="174" r="9" fill="#4a7fa5" />
              <circle cx="250" cy="174" r="5" fill="#7cb8e0" />
              <circle cx="250" cy="174" r="2.5" fill="#c8e8ff" />
            </g>

            {/* Planet 2 */}
            <g className="leo-o2" style={{ transformOrigin: "250px 250px" }}>
              <circle cx="250" cy="132" r="13" fill="#3d6e4a" />
              <circle cx="250" cy="132" r="8" fill="#5fa87a" />
              <circle cx="250" cy="132" r="3.5" fill="#a0d4b8" />
              <ellipse
                cx="250"
                cy="132"
                rx="20"
                ry="4"
                fill="none"
                stroke="#5fa87a"
                strokeWidth="1.5"
                opacity="0.5"
                transform="rotate(-20,250,132)"
              />
            </g>

            {/* Planet 3 */}
            <g className="leo-o3" style={{ transformOrigin: "250px 250px" }}>
              <circle cx="250" cy="88" r="11" fill="#7a4a2a" />
              <circle cx="250" cy="88" r="6.5" fill="#c07840" />
              <circle cx="250" cy="88" r="2.5" fill="#f0c080" />
            </g>

            {/* Planet 4 */}
            <g className="leo-o4" style={{ transformOrigin: "250px 250px" }}>
              <circle cx="250" cy="40" r="17" fill="#3a3a7a" />
              <circle cx="250" cy="40" r="10" fill="#5a5aaa" />
              <circle cx="250" cy="40" r="4" fill="#9090dd" />
              <ellipse
                cx="250"
                cy="40"
                rx="30"
                ry="6"
                fill="none"
                stroke="#7070cc"
                strokeWidth="2"
                opacity="0.55"
                transform="rotate(15,250,40)"
              />
              <ellipse
                cx="250"
                cy="40"
                rx="38"
                ry="7.5"
                fill="none"
                stroke="#5050aa"
                strokeWidth="1"
                opacity="0.35"
                transform="rotate(15,250,40)"
              />
            </g>

            {/* Planet 5 */}
            <g className="leo-o5" style={{ transformOrigin: "250px 250px" }}>
              <circle cx="250" cy="-20" r="6" fill="#6b1a1a" />
              <circle cx="250" cy="-20" r="3.5" fill="#c0392b" />
              <circle cx="250" cy="-20" r="1.5" fill="#ff6b6b" />
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-linear-to-r from-background via-background/60 to-transparent" />
        <div className="cosmic-decor" />

        {/* HERO TEXT  */}
        <div className="relative z-10 flex min-h-[88vh] w-full flex-col justify-end px-10 py-12 lg:px-16 lg:pb-30">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Cosmic Portfolio
          </p>
          <h1 className="text-5xl font-bold leading-[1.08] text-foreground sm:text-[52px]">
            Welcome to Leoniverse
          </h1>
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-foreground/60">
            A personal space for projects, articles, and the web development
            lessons I am collecting along the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/about" variant="primary">
              Learn More
            </Button>
            <Button to="/articles">Read Articles</Button>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──  */}
      <div className="grid w-full grid-cols-4 border-b border-border/50">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-8 py-7 ${i < stats.length - 1 ? "border-r border-border/50" : ""}`}
          >
            <p className="text-[32px] font-bold leading-none text-foreground">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── FEATURES ── full-bleed, bordered columns */}
      <section className="w-full border-b border-border/50">
        {/* Section header: two-column */}
        <div className="grid grid-cols-2 items-end gap-8 border-b border-border/50 px-10 py-10 lg:px-16">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Explore
            </p>
            <h2 className="text-2xl font-bold leading-snug text-foreground sm:text-[26px]">
              Start with the
              <br />
              main paths
            </h2>
          </div>
          <p className="self-end text-sm leading-7 text-foreground/55">
            Each section opens into a different part of the site — personal
            context, writing, and project work.
          </p>
        </div>

        {/* Feature cards: full-width columns divided by borders */}
        <div className="grid grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className={`flex flex-col gap-4 px-8 py-10 lg:px-10 ${
                i < features.length - 1 ? "border-r border-border/50" : ""
              }`}
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/40 bg-card/40">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="flex-1 text-sm leading-6 text-foreground/55">
                {feature.description}
              </p>
              <Button to={feature.to} variant="primary" className="w-fit">
                View More
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
