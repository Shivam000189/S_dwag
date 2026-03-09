import type { ReactElement } from "react";

type variants = "primary" | "secondary"

interface ButtonProps {
    variant: variants;
    size?: "sm" | "md" | "lg";
    text: String;
    startIcon?: ReactElement;
    endIcon?:ReactElement;
    onClick?:()=> void;
}


 
const variants = {
        "primary":"bg-purple-300",
        "secondary":"bg-purple-500"
    } 


export const Button = (props: ButtonProps) => {
    return <button className={variants[props.variant]}>{props.text}</button>
};


<Button variant="primary" size="md" onClick={()=> {}} text={"asd"}></Button>