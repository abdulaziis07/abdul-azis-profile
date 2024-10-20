import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-slate-300 scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
      {children}
    </h1>
  )
}
