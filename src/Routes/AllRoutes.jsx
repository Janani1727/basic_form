import React from 'react'

import { Routes,Route } from 'react-router-dom'

import Signup from "../pages/Signup"
import Login from "../pages/Login"
import AddTask from "../pages/AddTask"



const Allroutes = () => {
  return (

  <>
  <Routes>

     <Route  path="/"  element={<Signup />} />
     <Route path="/login" element={<Login />} />
     <Route path="/addtask" element={<AddTask />} />

  </Routes>
  </>
  
  )
}

export default Allroutes