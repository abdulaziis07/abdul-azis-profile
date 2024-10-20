import { CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export const ProfileContent = ({ children }: { children: ReactNode }) => {
  return (
    <CardContent>
      <div className="flex flex-col justify-center items-center p-4">
        {children}
      </div>
    </CardContent>
  )
}
