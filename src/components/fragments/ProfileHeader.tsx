import { CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";


export const ProfileHeader = ({ children }: { children: ReactNode }) => {
  return (
    <CardHeader>
      <div className="flex flex-col items-center p-4">
        {children}
      </div>
    </CardHeader>
  )
}
