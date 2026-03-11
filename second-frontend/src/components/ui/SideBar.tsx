import { BrainIcon } from "../icons/BrainIcon"
import { DocumentIcon } from "../icons/DocumentIcon"
import { ImageIcon } from "../icons/ImageIcon"
import { VideoIcon } from "../icons/VideoIcon"
import { Xicon } from "../icons/Xion"



export const SideBar = () => {
    
    return <div className="h-screen w-72 border-r-2">
        <div className="flex items-center pl-3 pt-2">
            <BrainIcon></BrainIcon>
            <span className="text-3xl font-semibold">Second Brain</span>
            </div>

        <div className="p-3 m-3">

            <div className="flex p-6">
                <Xicon></Xicon><span className="pl-3">Twitter</span>
                </div>
            <div className="flex p-6">
                <VideoIcon></VideoIcon>
                <span className="pl-3">Video</span>
                </div>
            <div className="flex p-6">
                <ImageIcon></ImageIcon>
                <span className="pl-3">Image</span>
                </div>
            <div className="flex p-6">
                <DocumentIcon></DocumentIcon>
                <span className="pl-3">Documents</span>
                </div>
        </div>
    </div>
}