import { BadgeShadcn } from '@/components/ui/badge';
import { ReactNode } from 'react';

type BadgeComponentProps = {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  children: ReactNode;
}

export const Badge = ({ variant, children }: BadgeComponentProps) => {
  return (
    <div aria-label="badge">
      <BadgeShadcn variant={variant} className="mx-1">{children}</BadgeShadcn>
    </div>
  )
}
