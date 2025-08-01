import { MotionCard } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/imageCard";

export const Treand = () => {
    return (
        <MotionCard className='bg-yellow-700 md:flex-2 overflow-hidden w-full space-y-2 '>
            <h1 className='font-dotted text-4xl '>Ride the Trend Wave</h1>
                <div className='bg-foreground justify-items-center-safe pt-5 relative h-60 overflow-hidden '>
                    <div className='flex flex-row z-10 relative '>
                        <ImageCard
                            className='rotate-6'
                            imageSrc='/pose.webp'
                            text='solo travel'
                        />
                        <ImageCard
                            className='-rotate-6'
                            imageSrc='/sunset.webp'
                            text='propbably the best sunset'
                        />
                    </div>
                    <ImageCard
                        className='absolute right-5 top-1/2 translate-y-4 rotate-6'
                        imageSrc='/cloud.webp'
                    />
                </div>
        </MotionCard>
    );
};
