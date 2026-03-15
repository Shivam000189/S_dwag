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
            {props.type === 'video' ? (
            <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                {/* <FileText size={48} className="text-gray-400" /> */}
            </div>
            ) : null}
            
            {props.content && (
            <div className="text-brand-text text-sm leading-relaxed">
                {props.type === 'document' ? (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">{props.title}</h3>
                    <ul className="list-disc list-inside space-y-2">
                    {props.content.split('\n').map((line, i) => (
                        <li key={i}>{line}</li>
                    ))}
                    </ul>
                </div>
                ) : (
                <p>{props.content}</p>
                )}
            </div>
            )}
        </div>

        <div className="flex flex-wrap gap-2">
            {props.tags ? props.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-brand-secondary text-brand-primary text-xs font-medium rounded-full">
                #{tag}
            </span>
            )) : null}
        </div>

        <div className="text-sm text-brand-muted">
            Added on {props.date}
        </div>


    </div>
}