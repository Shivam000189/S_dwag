import type { ReactElement } from "react";

type variants = "primary" | "secondary"

interface ButtonProps {
    variant: variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?:ReactElement;
    onClick?:() => void;
}


 
const variants = {
        "primary":"bg-brand-primary text-white hover:bg-opacity-90",
        "secondary":"bg-brand-secondary text-brand-primary hover:bg-opacity-80"
    } 

    
    
const sizeStyle = {
        "sm":"py-1 px-2",
        "md":"py-2 px-4",
        "lg":"py-4 px-6"
    }
    
    
export const Button = (props: ButtonProps) => {
    const defaultStyle = "flex items-center gap-2 rounded-lg font-medium cursor-pointer transition-all duration-200 active:scale-95 "

    return <button className={`${variants[props.variant]} ${sizeStyle[props.size]} ${defaultStyle}`} onClick={props.onClick}>
        {props.startIcon && <span className="w-5 h-5 flex items-center justify-center">{props.startIcon}</span>}
        {props.text} {props.endIcon ? <div className="pl-2">{props.endIcon}</div>: null}
        </button>
};


<Button variant="primary" size="md" onClick={()=> {}} text={"asd"}></Button>