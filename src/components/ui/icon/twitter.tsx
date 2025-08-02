"use client"

import { cn } from "@/lib/cn";
import { SVGMotionProps, motion } from "motion/react";


export function Twitter(props: SVGMotionProps<SVGSVGElement>) {
    return (
        <motion.svg
            // width='300'
            // height='300'
            viewBox='0 0 300 300'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            className={cn("h-3 w-4", props.className)}
            {...props}
            >
            <path
                stroke='currentColor'
                d='M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66'
            />
        </motion.svg>
    );
}
