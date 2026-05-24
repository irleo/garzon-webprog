import Button from "../../components/Button";
import aboutMe from "../../assets/images/aboutme_image.png";
import visual1 from "../../assets/images/visual1.jpg";
import visual2 from "../../assets/images/visual2.jpg";
import visual3 from "../../assets/images/visual3.jpg";
import visual4 from "../../assets/images/visual4.jpg";

const skills = ["HTML", "CSS", "JavaScript", "React"];

const notes = [
  {
    title: "Web Development",
    body: "I focus on responsive, functional, and accessible interfaces built with modern web tools.",
  },
  {
    title: "UI/UX Design",
    body: "I like layouts that feel clear, calm, and easy to move through, with enough visual character to stay memorable.",
  },
  {
    title: "Personal Interests",
    body: "Reading, online games, and quiet time help me recharge and keep learning with a fresher perspective.",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <section className="grid min-h-[calc(100vh-7rem)] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-10 top-8 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/45 p-3 shadow-[0_30px_100px_rgb(0_0_0_/_0.32)] backdrop-blur-xl">
            <img
              src={aboutMe}
              alt="about me"
              className="h-[70vh] max-h-[680px] min-h-[420px] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>
        </div>

        <div className="order-1 max-w-4xl lg:order-2 lg:pr-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            About Me
          </p>
          <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl xl:text-6xl">
            Building interfaces with code, curiosity, and a little cosmic noise.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/72 sm:text-lg">
            I enjoy building responsive and user-friendly websites using HTML,
            CSS, JavaScript, and modern frameworks. I keep improving by turning
            small ideas into actual screens, then learning from what feels good
            and what needs more polish.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/" variant="primary">
              Back Home
            </Button>
            <Button to="/articles">Open Articles</Button>
          </div>
        </div>
      </section>

      <section className="mt-24 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Stack
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold text-foreground">
            Core tools I keep returning to
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/80 bg-card/55 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_12px_35px_rgb(0_0_0_/_0.18)] backdrop-blur"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.title}
              className="rounded-2xl border border-border/70 bg-card/45 p-6 shadow-[0_18px_70px_rgb(0_0_0_/_0.22)] backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-foreground">{note.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/68">
                {note.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          <img
            src={visual1}
            alt="Code visual"
            className="h-80 w-full rounded-2xl object-cover shadow-[0_20px_80px_rgb(0_0_0_/_0.28)]"
          />
          <img
            src={visual2}
            alt="Workspace visual"
            className="h-80 w-full rounded-2xl object-cover shadow-[0_20px_80px_rgb(0_0_0_/_0.28)]"
          />
          <img
            src={visual3}
            alt="Development visual"
            className="h-96 w-full rounded-2xl object-cover shadow-[0_20px_80px_rgb(0_0_0_/_0.28)] sm:col-span-2"
          />
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Visual Notes
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              A page that feels more like a workspace than a brochure.
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/68">
              The images sit directly on the cosmic surface so the background
              stays present while the content keeps enough contrast to read.
            </p>
          </div>
          <img
            src={visual4}
            alt="Creative visual"
            className="h-80 w-full rounded-2xl object-cover shadow-[0_20px_80px_rgb(0_0_0_/_0.28)]"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
