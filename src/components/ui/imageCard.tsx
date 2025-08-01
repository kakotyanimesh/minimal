import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";

type ImageCardType = React.HTMLAttributes<HTMLDivElement> & {
    imageSrc : string,
    text ?: string
}

export const ImageCard = React.forwardRef<HTMLDivElement, ImageCardType>(({className, text, imageSrc, ...props}, ref) => {
    return (
        <div className={cn("bg-white w-fit h-fit  p-2", className)} {...props} ref={ref}>
            <Image src={imageSrc} width={100} height={100} alt="image"  className="size-36"/> 
            <h1 className={cn("text-xs text-background-dark font-uprightOne", text ? "block" : "hidden")}>{text}</h1>
        </div>
    )
})


ImageCard.displayName = "imageCard"