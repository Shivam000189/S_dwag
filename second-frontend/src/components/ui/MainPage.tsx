import { Button } from "./Button"
import { PlusIcon } from "../../icons/PlusButton"
import { ShareButton } from "../../icons/shareButton"
import { Card } from "./Card"
import { CreateComponent } from "./CreateComponet"
import { useState } from "react"


export const MainPage = ()=>{
    const [click, setClick] = useState(false)

    const handleCLick = () => {
        setClick(true);
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
            <Card type={"video"} title={"State of hurmose"} date={"dbfsub"} link="https://www.youtube.com/watch?v=YBB3GbluHjA" content="hello"/>
            <Card type={"tweet"} title={"State of hurmose"} date={"dbfsub"} link="https://x.com/claudeai/status/2031088171262554195" />
            <Card type={"document"} title={"State of hurmose"} tags={["productivity", "learning"]} content="hello" date={"01/01/2026"} />
        </div>
        <CreateComponent open={click}/>
    </div>
}