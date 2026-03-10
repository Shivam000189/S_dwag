import type { ReactElement } from "react";

type variants = "primary" | "secondary"

interface ButtonProps {
    variant: variants;
    size: "sm" | "md" | "lg";
    text: String;
    startIcon?: ReactElement;
    endIcon?:ReactElement;
    onClick?:()=> void;
}


 
const variants = {
        "primary":"bg-purple-300",
        "secondary":"bg-purple-400"
    } 

const defaultStyle = "rounded-md flex"


const sizeStyle = {
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}


export const Button = (props: ButtonProps) => {
    return <button className={`${variants[props.variant]} ${sizeStyle[props.size]} ${defaultStyle}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text} {props.endIcon} {props.endIcon}
        </button>
};


<Button variant="primary" size="md" onClick={()=> {}} text={"asd"}></Button>