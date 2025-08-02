"use client";
import { MotionCard } from "@/components/ui/card";
import { Instagram } from "@/components/ui/icon/instagram";

export const WideFeatureCard = () => {
    return (
        <MotionCard className='sm:w-2/3 w-full h-44 p-0 bg-transparent text-left group'>
            {/* <div className="bg-primary absolute rounded-full blur-md size-28 z-0 -left-6 top-1/2 -translate-y-1/2"/> */}
            {/* <div className="bg-primary absolute size-22 z-0 -right-2 blur-md -top-3 rounded-full"/> */}
            {/* <div className="bg-primary absolute rounded-full size-32 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"/> */}

            <div className='bg-foreground/10 z-10 backdrop-blur-xl w-full h-full flex flex-col justify-center items-center relative'>
                <Instagram className="size-8 rotate-12 blur-[2px] xl:left-56 lg:left-36 md:left-20 left-10 top-8 absolute" />

                <h1 className=' text-3xl '>
                    Make Banger <br />{" "}
                    <span className='font-dotted bg-gradient-to-b from-pink-600 via-red-400 to-yellow-500 bg-clip-text text-transparent'>
                        Instagram
                    </span>{" "}
                    Posts
                </h1>
            </div>
        </MotionCard>
    );
};
