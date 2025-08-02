"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export const ProfileCard = () => {
    const session = useSession();
    return (
        <Link href={"/profile"} className='bg-primary rounded-full size-9 flex justify-center items-center absolute bottom-17 cursor-pointer left-1/2 -translate-x-1/2'>
            <h1 className='font-anton text-xl'>
                {session.data?.user?.email?.split("")[0].toLocaleUpperCase()}
            </h1>
        </Link>
    );
};
