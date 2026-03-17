import { useState } from "react"
import { CrosIcon } from "../../icons/CrosIcon"


export const CreateComponent = ({open}) => {
    
    const handleClick = () => {
        
    }

    return <div>
        <div className={`fixed inset-0 flex justify-center items-center z-50 transition-all duration-300 ${open ? "bg-black/40 backdrop-blur-sm opacity-100" : "bg-transparent backdrop-blur-0 opacity-0"}`}>
                <div className="h-100 w-100 bg-white justify-center rounded-lg shadow">
                    <div className="flex justify-end p-2 cursor-pointer" onClick={handleClick}><CrosIcon /></div>
                    <div className="flex justify-center">
                        <div className="text-2xl font-medium">Create Content</div>
                    </div>

                    <div className="p-5">
                        <Input name={"Link"} />
                        <Input name={"Tink"} />
                        <Input name={"Tags"} />
                    </div>
                    <div className="flex justify-center">
                        <span className="h-10 w-50 text-3xl font-medium flex justify-center border rounded cursor-pointer hover:bg-amber-200">Sumbit</span>
                    </div>
                    
                </div>
            
            </div>

    </div>
}



function Input({name}){
    return <div className="pt-5">
        <span className="text-2xl font-medium pr-10">{name}</span>
        <input type={"text"} className="h-10 w-64 border rounded-lg" />
    </div>
}