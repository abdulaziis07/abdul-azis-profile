import { ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen w-full grid grid-cols-1 place-items-center bg-slate-950 text-slate-300 font-inter tracking-tight antialiased">
      {children}
    </main>
  );
};
