import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 text-white">
      
      {/* Cosmic glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-60px] h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-white/70" />
        <div className="absolute left-1/4 top-24 h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute right-20 top-16 h-1.5 w-1.5 rounded-full bg-white/70" />
        <div className="absolute bottom-24 left-20 h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute bottom-20 right-1/3 h-1.5 w-1.5 rounded-full bg-white/70" />
      </div>

      <div className="relative z-10 max-w-md text-center">
      
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.25)]">
          <Sparkles className="h-6 w-6 text-violet-400" />
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          404
        </h1>

        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
          Lost in Space
        </p>

        <p className="mt-4 text-sm leading-7 text-white/70">
          The page you're looking for drifted into another galaxy or never existed.
        </p>

      
      </div>
    </div>
  );
};

export default NotFoundPage;