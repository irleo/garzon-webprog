import Button from "../components/Button";
import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.jpg";
import article3 from "../assets/article3.jpg";
import article4 from "../assets/article4.jpg";

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Explore articles about web development, design, and modern tools
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          This page features selected articles that discuss important topics in
          web development such as HTML, CSS, JavaScript, React, Tailwind CSS,
          and user interface design.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Article card grid
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={article1}
                alt="Web development"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 01
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Getting Started with Web Development
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              This article introduces the basics of web development, including
              HTML, CSS, and JavaScript.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={article2}
                alt="React"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 02
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Introduction to React
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Learn the fundamentals of React, including components, props,
              state, and how React helps build interactive user interfaces.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={article3}
                alt="Tailwind CSS"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 03
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Using Tailwind CSS for Styling
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Tailwind CSS allows developers to style websites quickly using
              utility classes.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="aspect-4/3 w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={article4}
                alt="Responsive Navbar"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 04
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Building a Responsive Navbar
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A step-by-step guide on creating a responsive navigation bar using
              React and Tailwind CSS for modern web applications.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
