import { ReactNode } from "react";

export const FooterFragments = ({ children }: { children: ReactNode }) => {
  return (
    <footer className="w-full flex flex-col items-center shadow-footer p-4">
      <div className="flex flex-col gap-3 mb-2">{children}</div>
    </footer>
  );
};
