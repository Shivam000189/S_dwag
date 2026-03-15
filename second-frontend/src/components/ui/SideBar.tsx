import type { ReactElement } from "react"
import { BrainIcon } from "../../icons/BrainIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { ImageIcon } from "../../icons/ImageIcon"
import { VideoIcon } from "../../icons/VideoIcon"
import { Xicon } from "../../icons/Xion"


interface SidebarItemProps {
    icon:ReactElement;
    text:string;
    acitve?:boolean;
}


function SidebarItem(props: SidebarItemProps){
    return (
        <div className={`flex items-center gap-4 px-6 py-3 cursor-pointer transition-colors ${props.acitve ? "text-brand-text" : "text-brand-text hover:bg-gray-100"}`}>
            <span className="w-6 h-6">{props.icon}</span>
            <span className="font-medium">{props.text}</span>
        </div>
    )
} 


export const SideBar = () => {
    
    return <div className="h-screen w-72 bg-white border-r border-gray-200 flex flex-col py-6">
        <div className="flex items-center gap-3 px-6 mb-10 ">
            <div className="text-brand-primary"><BrainIcon></BrainIcon></div>
            <span className="text-2xl font-bold text-brand-text">Second Brain</span>
            </div>

        {/* <div className="flex-1">

            <div className="flex p-6 hover:bg-gray-100 shadow-md rounded-2xl">
                <Xicon></Xicon><span className="pl-3">Twitter</span>
                </div>
            <div className="flex p-6 hover:bg-gray-100 shadow-md rounded-2xl">
                <VideoIcon></VideoIcon>
                <span className="pl-3">Video</span>
                </div>
            <div className="flex p-6 hover:bg-gray-100 shadow-md rounded-2xl">
                <ImageIcon></ImageIcon>
                <span className="pl-3">Image</span>
                </div>
            <div className="flex p-6 hover:bg-gray-100 shadow-md rounded-2xl">
                <DocumentIcon></DocumentIcon>
                <span className="pl-3">Documents</span>
                </div>
        </div> */}
        <nav className="flex-1">
            <SidebarItem icon={<Xicon></Xicon>} text="Twitter"></SidebarItem>
            <SidebarItem icon={<ImageIcon></ImageIcon>} text="Image"></SidebarItem>
            <SidebarItem icon={<DocumentIcon></DocumentIcon>} text="Document"></SidebarItem>
            <SidebarItem icon={<VideoIcon></VideoIcon>} text="Video"></SidebarItem>
            <SidebarItem icon={<DocumentIcon></DocumentIcon>} text="tags"></SidebarItem>
        </nav>
    </div>
}