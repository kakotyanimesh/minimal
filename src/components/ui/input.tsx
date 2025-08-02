import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const InputVariants = cva(
    "w-full focus:ring-1 px-4 py-2 text-sm placeholder:text-xs focus:outline-none disabled:cursor-not-allowed disabled:opacity-25 font-semibold",
    {
        variants: {
            variant: {
                primary:
                    "focus:border-primary bg-foreground/40  focus:ring-primary/40 focus:ring-2 ",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof InputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <input
                className={cn(InputVariants({ variant }), className)}
                {...props}
                ref={ref}
            />
        );
    }
);
Input.displayName = "Input";
