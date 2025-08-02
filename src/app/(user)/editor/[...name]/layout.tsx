import { SideBar } from "@/components/ui/sidebar";
import React from "react";

export default function EditorPageLayout({children } : {children : React.ReactNode}) {
    return (
        <div className="flex flex-row ">
            <SideBar/>
            {children}
        </div>
    )
}