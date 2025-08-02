import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import { MainSidebar } from "@/components/ui/mainsidebar";

export default async function UserLayour({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session?.user?.email) {
        redirect("/sigin");
    }

    return (
        <div className='flex md:flex-row flex-col-reverse'>
            <MainSidebar />
            <div className="md:ml-16  w-full">{children}</div>
        </div>
    );
}
