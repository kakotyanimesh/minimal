import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";

const ButtonVariants = cva(
    "w-fit cursor-pointer whitespace-nowrap font-semibold transition-all ease-out duration-200 disabled:cursor-not-allowed disabled:opacity-25",
    {
        variants: {
            variant: {
                primary: "bg-primary text-foreground hover:shadow-primary",
                secondary:
                    "bg-foreground/90 text-primary hover:bg-foreground",
                transparent : "bg-transparent border-foreground border hover:bg-beige/10 "
            },
            size: {
                default: "px-4 py-2 text-sm",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

interface ButtonProps
    extends HTMLMotionProps<"button">,
        VariantProps<typeof ButtonVariants> {
    asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // we got error here !! as motion.create is the new One
        const SlotComp = asChild ? motion.create(Slot) : motion.button
        return (
            <SlotComp
                className={cn(ButtonVariants({ variant, size }), className, "")}
                {...props}
                ref={ref}
            />
        );
    }
);

Button.displayName = "Button";
