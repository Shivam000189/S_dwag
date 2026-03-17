
import { useState } from 'react'
import './App.css'
import { CreateComponent } from './components/ui/CreateComponet'
import { MainPage } from './components/ui/MainPage'
import { SideBar } from './components/ui/SideBar'

function App() {

  return (
    <div className='flex min-h-screen bg-brand-bg font-sans'>
        <SideBar></SideBar>
        <CreateComponent open={true}/>
        <MainPage></MainPage>
    </div>
  )
}

export default App
