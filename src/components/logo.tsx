import { cn } from "@/lib/cn";
import { dottedFont } from "@/lib/font-config";
import Link from "next/link";
import React, { forwardRef, HTMLAttributes } from "react";

export const Logo = forwardRef<HTMLAnchorElement, HTMLAttributes<HTMLAnchorElement>>(
    ({ className, ...props }, ref) => {
        return (
            <Link
                href={"/"}
                className={cn("text-2xl px-2", className, dottedFont.className)}
                {...props}
                ref={ref}>
                Minimal
            </Link>
        );
    }
);

Logo.displayName = "h1";
