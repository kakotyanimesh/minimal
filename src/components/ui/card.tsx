// motion card

import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";

const motionCardVariants = cva("w-fit rounded-none px-3 py-2 transition-all easeOut", {
    variants: {
        intent: {
            primary: "bg-foreground text-[hsl(var(--background))]",
        },
    },
    defaultVariants: {
        intent: "primary",
    },
});

interface MotionCardProps
    extends HTMLMotionProps<"div">,
        VariantProps<typeof motionCardVariants> {}

export const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(
    ({ children, intent, className, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(motionCardVariants({ intent }), className)}
                {...props}>
                {children}
            </motion.div>
        );
    }
);

MotionCard.displayName = "div";
