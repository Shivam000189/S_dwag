
import './App.css'
import { MainPage } from './components/ui/MainPage'
import { SideBar } from './components/ui/SideBar'

function App() {
  

  return (
    <div className='flex min-h-screen bg-brand-bg font-sans'>
        <SideBar></SideBar>
        <MainPage></MainPage>
    </div>
  )
}

export default App
