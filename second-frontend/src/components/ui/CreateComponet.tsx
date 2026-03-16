import { useState } from "react"


export default function CreateComponet({open}) {
    
    return <div>
        <div className={`fixed inset-0 flex justify-center items-center z-50 transition-all duration-300 ${open ? "bg-black/40 backdrop-blur-sm opacity-100" : "bg-transparent backdrop-blur-0 opacity-0"}`}>
                <div className="flex">

                </div>
            
            </div>

    </div>
}