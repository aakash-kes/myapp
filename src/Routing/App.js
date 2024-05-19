import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Mobile from './Mobile'
import Error from './Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        {/* dynamic route with : */}
          <Route path="/:aboutus" element={<AboutUs />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login:contact" element={<Login />} />
          <Route path="/mobile/:Category" element={<Mobile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
