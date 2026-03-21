import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'

function App() {

  return (
    <Router>
      <MainRoutes />
    </Router>
  )
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App
