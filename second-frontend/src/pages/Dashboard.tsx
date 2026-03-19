import { SideBar } from "../components/ui/SideBar"
import { MainPage } from "../components/ui/MainPage"

export function Dashboard(){
    return<div className='flex min-h-screen bg-brand-bg font-sans'>
            <SideBar></SideBar>
            <MainPage></MainPage>
        </div>
}