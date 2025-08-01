"use client"
import { MotionCard } from "@/components/ui/card"

export const WideFeatureCard = () => {
    return (
        <MotionCard className="sm:w-2/3 w-full h-44 p-0 bg-transparent relative text-left">
            {/* <div className="bg-primary absolute rounded-full blur-md size-28 z-0 -left-6 top-1/2 -translate-y-1/2"/> */}
            {/* <div className="bg-primary absolute size-22 z-0 -right-2 blur-md -top-3 rounded-full"/> */}
            {/* <div className="bg-primary absolute rounded-full size-32 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"/> */}
            <div className="bg-primary/80 z-10 backdrop-blur-2xl w-full h-full flex flex-col justify-center items-center">
                <h1 className=" text-3xl ">Make Banger <br /> <span className="font-dotted text-secondary">Instagram</span> Carousels</h1>
            </div>
        </MotionCard>
    )
}