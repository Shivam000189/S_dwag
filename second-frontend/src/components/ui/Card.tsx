import type { ReactElement } from "react"

interface CardProps {
    size: "lg" | "md" | "sm",
    image ?: ReactElement,
    title:String,
    startIcon?:ReactElement
}

const defaultStyle = "border-2 rounded-md flex items-start"


const sizeStyle = {
    sm: "h-32 w-32",
    md: "h-48 w-48",
    lg: "h-64 w-64"
}


export const Card = (props: CardProps) => {
    return <div className={`${sizeStyle[props.size]} ${defaultStyle}`}>
        {props.startIcon ? <div>{props.startIcon}</div> : null} {props.title}
    </div>
}