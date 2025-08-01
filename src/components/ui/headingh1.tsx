import { cn } from "@/lib/cn";
import { dottedFont } from "@/lib/font-config";
import React from "react";

export const HeadingH1 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
    return <h1 className={cn("xl:text-4xl md:text-3xl text-xl", className, dottedFont.className)} {...props} ref={ref} />;
});

HeadingH1.displayName = "headingH1";


/**
 * in foreward ref 
 * first type is the ref type means the ref is going to point to what type h1 -> headingElement right 
 * second type is the props type and we have to htmlattribute -> inside it htmlheadingelement
 */