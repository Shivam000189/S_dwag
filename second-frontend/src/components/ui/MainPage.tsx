import { Button } from "./Button"
import { PlusIcon } from "../icons/PlusButton"
import { ShareButton } from "../icons/shareButton"
import { Card } from "./Card"


export const MainPage = ()=>{
    return <div className="flex-1">
        <div className="flex p-5 justify-between">
                <div className="text-3xl font-medium">Add Notes</div>
                <div className="flex">
                    <Button startIcon={<PlusIcon size='lg'/>} variant='primary' text="Share" size='md'></Button>
                    <Button variant='secondary' text="Content me" size='md' startIcon={<ShareButton></ShareButton>}></Button>
                </div>

        </div>
        <div className="grid grid-cols-3 p-10">
            <Card title={'hownkn'} size="lg" startIcon={<PlusIcon size="lg" />} />
            <Card title={'hownkn'} size="lg" startIcon={<PlusIcon size="lg" />} />
            <Card title={'hownkn'} size="lg" startIcon={<PlusIcon size="lg" />} />
        </div>
    </div>
}