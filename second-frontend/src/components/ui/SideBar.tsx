import { BrainIcon } from "../icons/BrainIcon"
import { DocumentIcon } from "../icons/DocumentIcon"
import { ImageIcon } from "../icons/ImageIcon"
import { VideoIcon } from "../icons/VideoIcon"
import { Xicon } from "../icons/Xion"



export const SideBar = () => {
    
    return <div className="h-screen w-72 shadow-3xl">
        <div className="flex items-center pl-3 pt-2 ">
            <BrainIcon></BrainIcon>
            <span className="text-3xl font-semibold">Second Brain</span>
            </div>

        <div className="p-3 m-3 ">

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
        </div>
    </div>
}