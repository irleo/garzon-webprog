import Button from "../../components/Button";
import aboutMe from "../../assets/images/aboutme_image.png";
import visual1 from "../../assets/images/visual1.jpg";
import visual2 from "../../assets/images/visual2.jpg";
import visual3 from "../../assets/images/visual3.jpg";
import visual4 from "../../assets/images/visual4.jpg";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section
        className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6
            sm:px-6 sm:py-8 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src={aboutMe}
                alt="about me"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Me
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Web Developer with a passion for creating beautiful and functional
              websites.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              I enjoy building responsive and user-friendly websites using HTML,
              CSS, JavaScript, and modern frameworks. I love learning new
              technologies and continuously improving my skills in web
              development and design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick summary blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">HTML</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Foundation
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">CSS</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Styling
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">JavaScript</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Interactivity
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">React</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Framework
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Section Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Skills, experience, and personal interests
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-bold text-zinc-900">
                  Web Development
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  I specialize in creating responsive and user-friendly websites
                  using modern web technologies. My focus is on building clean,
                  functional, and accessible interfaces.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-bold text-zinc-900">
                  UI/UX Design
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  I aim to create intuitive and engaging user experiences
                  through thoughtful design, good layout structure, and
                  user-centered interfaces.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-bold text-zinc-900">
                  Personal Interests
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  When I am not coding, I enjoy reading, playing online games,
                  and spending time alone. These interests help me recharge and
                  stay inspired while continuing to learn new things.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Visual Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="aspect-square w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={visual1}
                  alt="Code"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={visual2}
                  alt="Code"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={visual3}
                  alt="Code"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square w-full overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={visual4}
                  alt="Code"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <Button className="mt-5">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
