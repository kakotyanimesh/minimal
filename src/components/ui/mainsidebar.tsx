"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { ReactNode } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { CiCloudOn, CiFolderOn, CiUser } from "react-icons/ci";

export const MainSidebar = () => {
    const pathname = usePathname();

    return (
        <div className='bg-primary/10 backdrop-blur-3xl px-3 md:py-0 py-1 fixed md:h-screen lg:top-0 bottom-0 right-0 md:right-auto left-0 z-90 space-y-8 border-r border-primary'>
            <div className=' border-b border-primary py-5 -mx-3 px-3 md:block hidden'>
                <h1 className='text-3xl font-dotted bg-primary flex justify-center items-center text-foreground'>
                    M
                </h1>
            </div>
            <div className='flex md:flex-col flex-row md:justify-self-auto justify-between gap-7'>
                {MainSidebarArray.map((s, key) => (
                    <Link
                        key={key}
                        href={s.src}
                        className={cn(
                            "p-2 ",
                            pathname === s.src
                                ? "bg-beige/20"
                                : "hover:bg-primary/40 transition-all ease-out"
                        )}>
                        {s.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};

const MainSidebarArray: { src: string; icon: ReactNode }[] = [
    {
        src: "/dashboard",
        icon: <HiOutlineHome className='size-6 text-beige' />,
    },
    { src: "/projects", icon: <CiFolderOn className='size-6 text-beige' /> },
    { src: "/uploads", icon: <CiCloudOn className='size-6 text-beige' /> },
    { src: "/uploads", icon: <CiUser className='size-6 text-beige' /> },
];
