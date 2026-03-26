import { ShareIcon } from "../../icons/ShareIcon"
import { DeleteIcon } from "../../icons/DeleteIcon"
import { Xicon } from "../../icons/Xion";
import { VideoIcon } from "../../icons/VideoIcon";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { ImageIcon } from "../../icons/ImageIcon";


type Note = 'Twitter' | 'video' | 'document' | 'link' | 'Youtube';

interface CardProps {
    title: string;
    type: Note;
    link?: string;
    content?: string;
    tags?: [string, string];
    date?: string;
}

const getEmbedUrl = (url?: string): string | undefined => {
    if (!url) return undefined;
    try {
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
        return `https://www.youtube.com/embed/${videoId}`;
    } catch {
        return url.replace("watch", "embed").replace("?v=", "/");
    }
};

export const Card = (props: CardProps) => {
    const icon = {
        Twitter: <Xicon />,
        video: <VideoIcon />,
        document: <DocumentIcon />,
        link: <ImageIcon />,
        Youtube: <VideoIcon />
    }

    const renderContent = () => {
        switch (props.type) {
            case 'Youtube':
                return (
                    <div className="rounded-xl overflow-hidden border border-white/10">
                        <iframe
                            className="w-full aspect-video"
                            src={getEmbedUrl(props.link)}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                );

            case 'Twitter':
                return (
                    <div className="h-48 overflow-auto rounded-xl border border-white/10 p-2">
                        <blockquote className="twitter-tweet">
                            <a href={props.link?.replace("x.com", "twitter.com")} />
                        </blockquote>
                    </div>
                );

            case 'document':
                return (
                    <div className="space-y-3 text-sm">
                        <h3 className="text-white font-semibold text-base">{props.title}</h3>
                        <ul className="space-y-1.5 list-none">
                            {props.content?.split('\n').map((line, i) => (
                                <li key={i} className="flex items-start gap-2 text-white/60">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case 'link':
            case 'video':
            default:
                return props.content ? (
                    <p className="text-white/70 text-sm leading-relaxed">{props.content}</p>
                ) : null;
        }
    };

    return (
        <div className="bg-[#1a1617] rounded-2xl border border-white/10 p-5 flex flex-col gap-4 
            hover:border-white/20 hover:bg-black transition-all duration-200">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <span className="text-white/40 w-4 h-4">{icon[props.type]}</span>
                    <span className="text-white font-medium text-sm">{props.title}</span>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/10 transition-all">
                        <ShareIcon />
                    </button>
                    <button className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all">
                        <DeleteIcon />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                {renderContent()}
            </div>

            {/* Tags */}
            {props.tags && props.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                    {props.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-white/10 text-white/60 text-xs font-medium rounded-full 
                                border border-white/10 hover:bg-white/15 hover:text-white transition-all cursor-default"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className="text-xs text-white/30 border-t border-white/10 pt-3">
                Added on {props.date}
            </div>
        </div>
    )
}