import { ReactNode } from "react";
import { BiSolidWidget } from "react-icons/bi";
import { IoText } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";

export const SideBar = () => {
    return (
        <div className="bg-primary/10 space-y-5 min-h-screen fixed">
            {SidebarName.map((s, key) => (
                <div key={key} className="flex flex-col justify-center items-center">
                    {s.icon}

                    <h1 className="text-xs font-dotted">{s.name}</h1>
                </div>
            ))}
        </div>
    );
};

const SidebarName: { name: string; icon: ReactNode }[] = [
    {
        name: "Elements",
        icon: <BiSolidWidget/>,
    },
    {
        name: "Text",
        icon: <IoText  />,
    },
    {
        name: "Uploads",
        icon: <FaCloud  />,
    },
];
