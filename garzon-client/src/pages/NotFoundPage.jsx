import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
      {/* Cosmic glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-60px] h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Stars */}
      <div className="cosmic-decor" />

      <div className="relative z-10 max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.25)]">
          <Sparkles className="h-6 w-6 text-violet-400" />
        </div>

        <h1 className="text-5xl font-bold tracking-tight">404</h1>

        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
          Lost in Space
        </p>

        <p className="mt-4 text-sm leading-7 text-white/70">
          The page you're looking for drifted into another galaxy or never existed.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>

          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-primary/70 "
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;