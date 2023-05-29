import React from 'react'

import { Routes,Route } from 'react-router-dom'

import Signup from "../components/Signup"
import Login from "../components/Login"
// import ToDo from '../components/ToDo'
import AddTask from '../components/AddTask'



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