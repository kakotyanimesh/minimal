"use client";
import { HeadingH1 } from "../ui/headingh1";
import { Caption } from "./bentoGriddivs/caption";
import { InstagramScroll } from "./bentoGriddivs/instagramscroll";
import { ScrapeBook } from "./bentoGriddivs/scrapeBox";
import { Treand } from "./bentoGriddivs/treand";
import { WideFeatureCard } from "./bentoGriddivs/widefeature";

export const FeatureSection = () => {
    return (
        <div className='text-center space-y-5'>
            <section className='space-y-4'>
                <HeadingH1>
                    Everything you need for perfect{" "}
                    <span className='text-primary'>carousels</span>
                </HeadingH1>

                <p className='md:text-sm text-xs'>
                    Create stunning Instagram-ready content with our <br className="hidden md:flex" />
                    comprehensive design toolkit
                </p>
            </section>
            {/* bento grid */}
            <section className='xl:mx-32 lg:mx-10 sm:mx-4 space-y-2 h-[70vh]'>
                <div className='flex sm:flex-row flex-col gap-2'>
                    <WideFeatureCard />
                    <ScrapeBook />
                </div>
                <div className='flex md:flex-row flex-col gap-2 '>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-2 md:flex-[2.4] '>
                        <InstagramScroll />
                        <div className='flex flex-col justify-between gap-2'>
                            <Caption/>
                            <div className='bg-primary-dark h-2/3 flex  justify-center items-center'>
                                <h1 className="font-anton text-4xl">78k Likes</h1>
                            </div>
                        </div>
                    </div>

                    <Treand/>
                </div>
            </section>
        </div>
    );
};
