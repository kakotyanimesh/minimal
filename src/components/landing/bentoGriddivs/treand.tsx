import { MotionCard } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/imageCard";
import Image from "next/image";

export const Treand = () => {
    return (
        <MotionCard className='bg-primary md:flex-[1.9] overflow-hidden w-full space-y-10'>
            <h1 className='font-dotted text-4xl '>Ride the Trend Wave</h1>
            <div className='flex flex-row relative mx-4'>
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
                <ImageCard
                    className='absolute right-2 top-10 rotate-6'
                    imageSrc='/cloud.webp'
                />
                <Image src={"/stamp.png"} width={100} height={100} alt="stamp" className="size-10 absolute top-5 right-10" />
                <Image src={"/cameraroll.webp"} width={100} height={100} alt="stamp" className="h-12 w-8 rotate-90 absolute top-1/2  left-36" />

            </div> 
        </MotionCard>
    );
};
