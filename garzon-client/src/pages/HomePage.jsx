import Button from "../components/Button";
import hero from "../assets/hero_image.jpg";
import aboutme from "../assets/aboutme.jpg";
import projects from "../assets/projects.jpg";
import articles from "../assets/articles.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Hero Section
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to Leoniverse
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              This website showcases my projects, articles, and learning journey
              in web development.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex h-70 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src={hero}
                alt="Hero"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick overview blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">10</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">3</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pages
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">5</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Technologies
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">6</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Articles
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Cards
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Simple wireframe cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={aboutme}
                alt="About Me"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-zinc-900">
              About Me
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Learn more about my background, skills, and experience in web
              development.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={articles}
                alt="Articles"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-zinc-900">
              Articles
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Read my articles about web development, programming, and
              technology.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={projects}
                alt="Projects"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-zinc-900">
              Projects
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Explore the projects I have built using React, JavaScript, and
              modern web tools.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
