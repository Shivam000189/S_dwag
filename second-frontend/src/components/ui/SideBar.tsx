import type { ReactElement } from "react"
import { BrainIcon } from "../../icons/BrainIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { ImageIcon } from "../../icons/ImageIcon"
import { VideoIcon } from "../../icons/VideoIcon"
import { Xicon } from "../../icons/Xion"


interface SidebarItemProps {
    icon: ReactElement;
    text: string;
    acitve?: boolean;
}


function SidebarItem(props: SidebarItemProps) {
    return (
        <button
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer
                ${props.acitve
                    ? "bg-white/10 text-white shadow-lg"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
        >
            <span className="w-5 h-5">{props.icon}</span>
            <span className="font-medium">{props.text}</span>
        </button>
    )
}


export const SideBar = () => {

    return (
        <div className="h-screen w-64 bg-[#1a1617] text-white/60 flex flex-col p-8 shadow-lg">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#1a1617]" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Second Brain</span>
            </div>

            {/* Nav */}
            <nav className="flex-1 space-y-2">
                <SidebarItem icon={<Xicon />} text="Twitter" />
                <SidebarItem icon={<ImageIcon />} text="Image" />
                <SidebarItem icon={<DocumentIcon />} text="Document" />
                <SidebarItem icon={<VideoIcon />} text="Video" />
                <SidebarItem icon={<DocumentIcon />} text="Tags" />
            </nav>
        </div>
    )
}