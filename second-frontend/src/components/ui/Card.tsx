import type { ReactElement } from "react"
import { ShareIcon } from "../icons/ShareIcon"
import { DeleteIcon } from "../icons/DeleteIcon"
import { Xicon } from "../icons/Xion";
import { VideoIcon } from "../icons/VideoIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ImageIcon } from "../icons/ImageIcon";


interface CardProps {
    title:string;
    type:'tweet' | 'video' | 'document' | 'link';
    content?:string;
    tags?:[];
    date:string;
}




export const Card = (props: CardProps) => {
    const icon ={
        tweet: <Xicon></Xicon>,
        video:<VideoIcon></VideoIcon>,
        document:<DocumentIcon />,
        link:<ImageIcon />
    }
    return <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {icon[props.type]}
                <span className="text-brand-text font-medium">{props.title}</span>
            </div>
            <div className="flex items-center gap-2 text-brand-muted">
                <button className="hover:text-brand-primary transition-colors">
                    <ShareIcon />
                </button>
                <button className="hover:text-brand-red-500 transition-colors">
                    <DeleteIcon></DeleteIcon>
                </button>
            </div>
        </div>


        <div className="flex-1">

        </div>



    </div>
}