"use client";
import { HeadingH1 } from "../ui/headingh1";
import { HeartIcon } from "../ui/icon/heartIcon";
import { Caption } from "./bentoGriddivs/caption";
import { InstagramScroll } from "./bentoGriddivs/instagramscroll";
import { ScrapeBookPost} from "./bentoGriddivs/scrapeBook";
import { ScrapeBook } from "./bentoGriddivs/Trend";
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
            <section className='xl:mx-32 sm:mx-4 lg:mx-0 space-y-2 h-[70vh]'>
                {/* <div className="bg-primary opacity-60 rounded-full size-56 absolute top-1/2 left-1/2 -translate-x-1/2 blur-md"/> */}
                <div className='flex sm:flex-row flex-col gap-2'>
                    <WideFeatureCard />
                    <ScrapeBook />
                </div>
                <div className='flex lg:flex-row flex-col gap-2 '>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-2 lg:flex-2 '>
                        <InstagramScroll />
                        <div className='flex flex-col gap-2'>
                            <Caption />
                            <div className='bg-primary-dark h-20 flex  justify-center items-center relative'>
                                <h1 className="font-anton text-4xl">78k Likes</h1>
                                <HeartIcon className="absolute right-4 size-6"/>
                            </div>
                        </div>
                    </div>

                    <ScrapeBookPost />
                </div>
            </section>
        </div>
    );
};
