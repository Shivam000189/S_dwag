
import './App.css'
import CreateComponet from './components/ui/CreateComponet'
import { MainPage } from './components/ui/MainPage'
import { SideBar } from './components/ui/SideBar'

function App() {
  

  return (
    <div className='flex min-h-screen bg-brand-bg font-sans'>
        <SideBar></SideBar>
        <CreateComponet open={true}/>
        <MainPage></MainPage>
    </div>
  )
}

export default App
