import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <div {...props} className={className}>
      Button
    </div>
  );
}
