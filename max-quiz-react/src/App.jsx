import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WebLayout from './layouts/WebLayout'
import Login from './pages/Auth/Login'
import Contact from './pages/Contact'
import Register from './pages/Auth/Register'
import UserLayout from './layouts/UserLayout'
import UserDashboard from './pages/Shared/UserDashboard'
import UserMembership from './pages/Shared/UserMembership'
import UserAssesments from './pages/Shared/UserAssesments'
import UserSettings from './pages/Shared/UserSettings'
import McqLayout from './layouts/McqLayout'
import McqCheck from './pages/Mcq/McqCheck'
import McqPanel from './pages/Mcq/McqPanel'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout />}>
            <Route exact path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path='/user/dashboard' element={<UserDashboard />} />
            <Route path='/user/membership' element={<UserMembership />} />
            <Route path='/user/assesments' element={<UserAssesments />} />
            <Route path='/user/settings' element={<UserSettings />} />
          </Route>
          <Route element={<McqLayout />}>
            <Route path='/mcq/:mid' element={<McqCheck />} />
            <Route path='/mcq/:mid/u/:uid/x/:mcqcode' element={<McqPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App