"use client";
import { motion, Variants } from "motion/react";
import { AnimatedH1 } from "../ui/animatedText";
import { Button } from "../ui/Button";
import Link from "next/link";

export const Heading = () => {
    const pbVariants: Variants = {
        initial: { opacity: 0, y: 7, filter: "blur(4px)" },
        animate: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                ease: "easeOut",
                delay: 0.09,
            },
        },
    };
    return (
        <div className='flex flex-col justify-center text-center items-center h-[80vh] bg-primary/10 space-y-5'>
            <div>
                <AnimatedH1
                    className='xl:text-4xl md:text-3xl text-xl text-primary'
                    t1='We make your boring'
                />
                <AnimatedH1
                    delayTime={0.06}
                    className='xl:text-4xl md:text-3xl text-xl text-primary'
                    t1='photos interesting'
                />
            </div>
            <motion.p
                variants={pbVariants}
                initial='initial'
                animate='animate'
                className='md:text-sm text-xs'>
                Turn your feed into a masterpiece. Effortlessly design stunning
                carousels, <br className='hidden md:flex' /> curated photo
                collections, and unlock your creativity.
            </motion.p>
            <Button
                variants={pbVariants}
                initial='initial'
                animate='animate'
                // transition={{delay : 0.4}}
                asChild
                variant={"primary"}>
                <Link href={"/signin"}>Get Started</Link>
            </Button>
        </div>
    );
};
