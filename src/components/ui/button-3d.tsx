import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button3dVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-base ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent-gold text-ink shadow-gold hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] active:shadow-md",
        secondary: "border-2 border-ink bg-transparent text-ink hover:bg-surface hover:scale-[1.03] active:scale-[0.98]",
        ghost: "bg-transparent text-ink hover:bg-surface/50 hover:scale-[1.02] active:scale-[0.99]",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        icon: "h-12 w-12",
      },
      shape: {
        default: "rounded-md",
        pill: "rounded-pill",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      shape: "pill",
    },
  }
);

export interface Button3DProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button3dVariants> {
  asChild?: boolean;
}

const Button3D = React.forwardRef<HTMLButtonElement, Button3DProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(button3dVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button3D.displayName = "Button3D";

export { Button3D, button3dVariants };
