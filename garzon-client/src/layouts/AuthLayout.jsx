import { Outlet } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const AuthLayout = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cosmic text-foreground">
      <div className="cosmic-decor"/>
        
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl rounded-[2rem] border border-zinc-200/70 bg-white/85 p-8 shadow-[0_0_40px_rgba(139,92,246,0.10)] backdrop-blur-xl sm:p-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_0_18px_rgba(139,92,246,0.16)]">
              <Sparkles className="h-6 w-6 text-violet-500" />
            </div>

            {/* <h1 className="mt-4 text-2xl font-semibold tracking-wide text-zinc-900 sm:text-3xl">
              Welcome To Leoniverse
            </h1>
            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
              Enter your account and continue exploring stories, ideas, and creative work in one quiet cosmic space.
            </p> */}
          </div>

          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;