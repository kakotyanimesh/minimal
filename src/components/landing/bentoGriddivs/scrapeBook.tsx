import { MotionCard } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/imageCard";
import Image from "next/image";

export const ScrapeBookPost = () => {
    return (
        <MotionCard className='md:flex-[1.9] w-full relative bg-transparent h-auto p-0'>
            <div className='bg-primary absolute md:size-48 size-32 opacity-60 blur-sm rounded-full top-1/2 -translate-y-1/2 left-20' />

            <div className='space-y-10 bg-foreground/10 backdrop-blur-xl h-full relative overflow-hidden pt-4'>
                <h1 className='font-dotted text-4xl text-primary '>
                    Scrapebook Edits in a Snap
                </h1>
                <div className='flex md:flex-row flex-col justify-center items-center relative '>
                    <div className='relative'>
                        <ImageCard
                            className='rotate-6 '
                            imageSrc='/pose.webp'
                            text='solo travel'
                        />
                        <Image
                            src={"/stamp.png"}
                            width={100}
                            draggable='false'
                            loading='lazy'
                            height={100}
                            alt='stamp'
                            className='size-12 z-10 absolute top-5 md:-top-3 -right-7'
                        />
                    </div>
                    <ImageCard
                        className='-rotate-6'
                        imageSrc='/sunset.webp'
                        text='propbably the best sunset'
                    />
                    <div className='relative'>
                        <ImageCard
                            className='md:mt-10 rotate-4 -z-10'
                            imageSrc='/cloud.webp'
                        />

                        <Image
                            src={"/cameraroll.webp"}
                            width={100}
                            height={100}
                            draggable='false'
                            loading='lazy'
                            alt='stamp'
                            className='h-12 w-8 rotate-90 absolute top-3 '
                        />
                    </div>
                </div>
            </div>
        </MotionCard>
    );
};
