"use client";
import { cn } from "@/lib/cn";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import React, { useState } from "react";
import { Logo } from "./logo";
import { MotionCard } from "./ui/card";
import { Button } from "./ui/Button";
import Link from "next/link";

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    React.useEffect(() => {
        document.body.style.overflow = openMenu ? "hidden" : "";
    });
    return (
        <motion.div
            initial={false}
            animate={openMenu ? "initial" : "animate"}
            className='flex flex-row justify-between overflow-hidden'>
            <div className='relative overflow-hidden flex justify-center items-center h-fit '>
                <motion.div
                    className='absolute z-20 inset-0 '
                    variants={{
                        animate: { scaleY: 0 },
                        initial: {
                            background: "var(--color-background)",
                            scaleY: 1,
                            transition: {
                                ease: "easeOut",
                                // type: "spring",
                                delay: 0.2,
                            },
                        },
                    }}
                />
                <Logo className='h-fit relative z-20' />
            </div>
            <NavMenuButton onClick={() => setOpenMenu(!openMenu)} />
            <AnimatePresence mode='wait'>
                {openMenu && <MenuCard />}
            </AnimatePresence>
        </motion.div>
    );
};

const NavMenuButton: React.FC<HTMLMotionProps<"button">> = ({
    className,
    ...props
}) => {
    return (
        <motion.button
            className={cn(
                "cursor-pointer flex justify-center items-center h-12 z-20",
                className
            )}
            {...props}>
            <svg className='w-full h-full block ' viewBox='0 0 16 10'>
                <motion.path
                    variants={{
                        animate: {
                            d: "M 2 2 L 16 2",
                        },
                        initial: {
                            d: "M 2 2 L 12 6",
                        },
                    }}
                    fill='transparent'
                    strokeWidth={0.2}
                    stroke='var(--color-primary)'
                />
                <motion.path
                    d='M 2 3.5 L 16 3.5'
                    variants={{
                        animate: { opacity: 1 },
                        initial: { opacity: 0 },
                    }}
                    fill='transparent'
                    strokeWidth={0.2}
                    stroke='var(--color-primary)'
                />
                <motion.path
                    variants={{
                        animate: {
                            d: "M 2 5 L 16 5",
                        },
                        initial: {
                            d: "M 2 6 L 12 2",
                        },
                    }}
                    fill='transparent'
                    strokeWidth={0.2}
                    stroke='var(--color-primary)'
                />
            </svg>
        </motion.button>
    );
};

const MenuCard = () => {
    return (
        <MotionCard
            initial={{ opacity: 0, y: "-100%" }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    ease: "easeIn",
                    duration: 0.2,
                },
            }}
            exit={{
                opacity: 0,
                y: "-100%",
                transition: {
                    ease: "easeIn",
                    delay: 0.1,
                },
            }}
            className='fixed right-0 top-0 w-full h-full justify-center items-center text-center z-10 flex flex-col gap-4'>
            <div className='flex flex-col'>
                {navLinks.map((n, idx) => (
                    <Link href={n.src} key={idx} className='text-2xl relative text-background hover:text-primary transition-all ease-linear duration-150'>
                        {n.title}
                    </Link>
                ))}
            </div>
            <Button asChild variant={"primary"} className="w-20">
                <Link href='signin'>Sign In</Link>
            </Button>
        </MotionCard>
    );
};

const navLinks: { title: string; src: string }[] = [
    { title: "Home", src: "/home" },
    { title: "About", src: "/about" },
    { title: "Pricing", src: "/" },
    { title: "Review", src: "/review" },
];
