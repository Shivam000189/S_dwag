import type { ReactElement } from "react"
import { ShareIcon } from "../icons/ShareIcon"
import { DeleteIcon } from "../icons/DeleteIcon"

interface CardProps {
    size: "lg" | "md" | "sm",
    image ?: ReactElement,
    title:String,
    startIcon?:ReactElement
}

const defaultStyle = "rounded-md shadow-md flex bg-white pt-5 pl-3"


const sizeStyle = {
    sm: "h-32 w-32",
    md: "h-48 w-48",
    lg: "h-72 w-64"
}


export const Card = (props: CardProps) => {
    return <div className={`${sizeStyle[props.size]} ${defaultStyle}`}>
        {props.startIcon ? <div>{props.startIcon}</div> : null} {props.title}
        <div className="flex gap-4 pl-20"><ShareIcon></ShareIcon>
        <DeleteIcon></DeleteIcon>
        </div>
    </div>
}