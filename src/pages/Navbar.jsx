import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
   
   <div style={{display:"flex",gap:"40px", border:"1px solid teal" ,backgroundColor:"Teal",height:"50px", width:"100%",justifyContent:"space-evenly",fontSize:"20px"}}>

    <Link to={"/"}>
    <p style={{color:"white",textDecoration:"none"}}>signup</p>
    </Link>

    <Link to={"/login"}>
    <p style={{color:"white",textDecoration:"none"}}>login</p>
    </Link>

    <Link to={"/addtask"}>
    <p style={{color:"white",textDecoration:"none"}}>addtask</p>
    </Link>

   </div>
   
    </>

  )
}

export default Navbar