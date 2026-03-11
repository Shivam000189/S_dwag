
import './App.css'
import { PlusIcon } from './components/icons/PlusButton'
import { ShareButton } from './components/icons/shareButton'
import { Button } from './components/ui/Button'
import { MainPage } from './components/ui/MainPage'
import { SideBar } from './components/ui/SideBar'

function App() {
  

  return (
    <div className='flex'>
        
        <SideBar></SideBar>
        <MainPage></MainPage>
    </div>
  )
}

export default App
