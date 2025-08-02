import { cn } from "@/lib/cn";
import { CorossolProps } from "@/lib/types";
import React, { HTMLAttributes } from "react";

export const CorossolOne = React.forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement> & CorossolProps
>(({ className, imageSrc, ...props }, ref) => {
    return (
        <div className={cn("", className)} {...props} ref={ref}>
            {imageSrc}
        </div>
    );
});

CorossolOne.displayName = "corossolOne";
