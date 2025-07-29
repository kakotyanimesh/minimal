"use client";
import { cn } from "@/lib/cn";
import { forwardRef, HTMLAttributes } from "react";
import { motion } from "motion/react";

type AnimatedH1Props = HTMLAttributes<HTMLHeadingElement> & { t1: string, delayTime ?: number };

export const AnimatedH1 = forwardRef<HTMLHeadingElement, AnimatedH1Props>(
    ({ className, t1,delayTime, ...props }, ref) => {
        return (
            <h1 className={cn("text-center md:space-x-2 space-x-1 text-3xl break-all", className)} {...props} ref={ref}>
                {t1.split(" ").map((t, idx) => (
                    <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: -7, filter: "blur(12px)" }}
                        animate={{opacity : 1, y : 0, filter : "blur(0px)"}}
                        viewport={{once : true}}
                        transition={{
                            delay :(delayTime ? delayTime : 0.04) * idx,
                            type : "spring",
                            ease : "easeOut"
                        }}
                        >
                        {t}
                    </motion.span>
                ))}
            </h1>
        );
    }
);

AnimatedH1.displayName = "Animatedh1";
