import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { forwardRef, HTMLAttributes } from "react";

const LinkVariants = cva(
    "w-fit disabled:cursor-not-allowed disabled:opacity-50 transition-all ease-out duration-200",
    {
        variants: {
            intent: {
                primary: "text-background/60 hover:text-background",
                secondary: "text-primary-foreground/80 hover:underline hover:underline-offset-2 decoration-primary-foreground/30 hover:text-foreground"

            },
        },
        defaultVariants: {
            intent: "primary",
        },
    }
);

type LinkTagProps = LinkProps &
    Omit<HTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    VariantProps<typeof LinkVariants>;

export const LinkTag = forwardRef<HTMLAnchorElement, LinkTagProps>(
    ({ className, intent, ...props }, ref) => {
        return (
            <Link
                {...props}
                className={cn(LinkVariants({ intent }), className)}
                ref={ref}>
                {props.children}
                
            </Link>
        );
    }
);

LinkTag.displayName = "Linktag";
