import { ReactNode } from "react";

export const Description = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={
        `text-justify text-md lg:text-lg tracking-tight [&:not(:first-child)]:mt-2 ${
        className}`
      }
    >
      {children}
    </p>
  );
};
