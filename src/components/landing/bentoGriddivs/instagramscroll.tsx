"use client";
import { MotionCard } from "@/components/ui/card";
import { VerticalDots } from "@/components/ui/icon/verticaldots";
import Image from "next/image";
import { motion } from "motion/react";

export const InstagramScroll = () => {
    return (
        <MotionCard className='w-full bg-transparent p-0 group cursor-pointer relative'>
            <section className='flex flex-row items-center justify-between bg-foreground/90 text-background px-4 py-3'>
                <div className='flex flex-row items-center gap-2'>
                    <Image
                        src={"/instagramProfile.png"}
                        width={100}
                        height={190}
                        alt='instagram_profile'
                        className='rounded-full size-5'
                    />
                    <h1 className='text-xs font-semibold font-sans'>minimal</h1>
                </div>
                <VerticalDots />
            </section>
            <div className='flex flex-row overflow-x-auto scrollbar-none'>
                {Array.from({ length: 9 }).map((_, k) => (
                    <Image
                        src={`/instapost/${k}.jpg`}
                        alt='instagram post'
                        width={100}
                        height={100}
                        className='w-full h-62 select-none pointer-events-none'
                        key={k}
                    />
                ))}
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 7, filter : "blur(4px)" }}
                viewport={{once : true}}
                whileInView={{ opacity: 1, y: 0 , filter : "blur(0px)"}}
                transition={{
                    ease: "linear",
                    duration: 0.4,
                }}
                // bug here on lg the position is something fucked up will do later
                className='absolute left-1/2 -translate-x-1/2 bottom-4 backdrop-blur-3xl font-dotted text-secondary text-xs bg-pink-400 z-20 shadow-[5px_5px_0px_0px_#c05621] rounded-2xl px-3 '>
                scroll me
            </motion.h1>
            <div className='bg-foreground/90  p-3'>
                <section className='flex flex-row justify-between'>
                    <div className='flex'>
                        <svg
                            className='cursor-pointer'
                            fill='black'
                            height='18'
                            viewBox='0 0 48 48'
                            width='24'>
                            <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                        </svg>
                        <svg
                            fill='black'
                            className='cursor-pointer'
                            height='18'
                            viewBox='0 0 40 48'
                            width='24'>
                            <path
                                d='M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z'
                                fillRule='evenodd'></path>
                        </svg>
                        <svg
                            fill='black'
                            className='cursor-pointer'
                            height='18'
                            viewBox='0 0 48 48'
                            width='24'>
                            <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
                        </svg>
                    </div>
                    <svg
                        fill='black'
                        height='18'
                        viewBox='0 0 48 48'
                        width='24'>
                        <path d='M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z'></path>
                    </svg>
                </section>
            </div>
        </MotionCard>
    );
};
