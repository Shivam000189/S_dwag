
import { ShareIcon } from "../../icons/ShareIcon"
import { DeleteIcon } from "../../icons/DeleteIcon"
import { Xicon } from "../../icons/Xion";
import { VideoIcon } from "../../icons/VideoIcon";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { ImageIcon } from "../../icons/ImageIcon";


type Note = 'Twitter' | 'video' | 'document' | 'link' | 'Youtube' ;

interface CardProps {
    title:string;
    type:Note;
    link?:string;
    content?:string;
    tags?:[string, string];
    date?:string;
}




export const Card = (props: CardProps) => {
    const icon ={
        Twitter: <Xicon></Xicon>,
        video:<VideoIcon></VideoIcon>,
        document:<DocumentIcon />,
        link:<ImageIcon />,
        Youtube:<VideoIcon />
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
            {props.type === 'Youtube' && (
            <div>
                {props.type === 'Youtube' && <iframe className="w-full" src={props.link?.replace("watch" , "embed").replace("?v=", "/")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>}
            </div>
            )}

            {props.type === 'Twitter' && 
                <div className="h-48 object-cover overflow-auto">
                    <blockquote className="twitter-tweet">
                        <a href={props.link?.replace("x.com", "twitter.com")}></a> 
                    </blockquote>
                </div>

            }
            
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
                <h1 className="font-medium text-2xl">{props.content}</h1>
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