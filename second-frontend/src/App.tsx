
import { useState } from 'react'
import './App.css'
import { CreateComponent } from './components/ui/CreateComponet'
import { MainPage } from './components/ui/MainPage'
import { SideBar } from './components/ui/SideBar'
import { Dashboard } from './pages/Dashboard'
import { Route, useNavigate, Routes, BrowserRouter as Router } from 'react-router-dom'
import { SignUp } from './pages/Signup'

function App() {

  return (
    <Router>
      <MainRoutes />
    </Router>
  )
}

function MainRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}/>
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App
