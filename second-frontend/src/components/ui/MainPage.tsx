import { Button } from "./Button"
import { PlusIcon } from "../../icons/PlusButton"
import { ShareButton } from "../../icons/shareButton"
import { Card } from "./Card"
import { CreateComponent } from "./CreateComponet"
import { useState } from "react"
import { useContent } from "../../hooks/useContent"


export const MainPage = ()=>{
    const [click, setClick] = useState(false)
    const [close, setClose] = useState(!click); 
    const contents = useContent();
    
    



    const handleCLick = () => {
        setClick(true);
    }
    const handleClick2 = () => {
        setClick(false);
    }

    return <div className="flex-1 p-10">
        <header className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-brand-text">Add Notes</h2>
                <div className="flex items-center gap-4">
                    <Button startIcon={<PlusIcon size='lg'/>} variant='primary' text="Add Content" size='md' onClick={handleCLick}></Button>
                    <Button variant='secondary' text="Share" size='md' startIcon={ <ShareButton/>}></Button>
                </div>

        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.map(({type, title , link})=> <Card type={type} title={title} link={link} content={title}/>)}
            
        </div>
        <CreateComponent open={click} onClose={handleClick2}/>
    </div>
}