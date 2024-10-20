import { CardFooter } from "@/components/ui/card";
import { ReactNode } from "react";

export const ProfileFooter = ({ children }: { children: ReactNode }) => {
  return (
    <CardFooter>
      <div className="flex flex-col justify-center items-center p-4">
        {children}
      </div>
    </CardFooter>
  )
}
