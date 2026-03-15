import { Button } from "./Button"
import { PlusIcon } from "../icons/PlusButton"
import { ShareButton } from "../icons/shareButton"
import { Card } from "./Card"


export const MainPage = ()=>{
    return <div className="flex-1 p-10">
        <header className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-brand-text">Add Notes</h2>
                <div className="flex items-center gap-4">
                    <Button startIcon={<ShareButton/>} variant='primary' text="Share" size='md'></Button>
                    <Button variant='secondary' text="Content me" size='md' startIcon={<PlusIcon size='lg'/>}></Button>
                </div>

        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card type={"video"} title={"Youtube"} date={"dbfsub"} />
            {/* <Card title={'hownkn'} />
            <Card title={'hownkn'}/> */}
        </div>
    </div>
}