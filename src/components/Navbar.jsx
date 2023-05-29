import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
   
   <div style={{display:"flex",gap:"40px", border:"0px solid black" ,backgroundColor:"black",height:"60px", width:"100%",justifyContent:"space-evenly",fontSize:"22px",fontWeight:"bold"}}>

    <Link to={"/"} style={{textDecoration:"none"}}>
    <p style={{color:"white",marginTop:"10px"}}>Signup</p>
    </Link>

    <Link to={"/login"} style={{textDecoration:"none"}}>
    <p style={{color:"white",marginTop:"10px"}}>Login</p>
    </Link>

    <Link  style={{textDecoration:"none"}}>
    <p style={{color:"white",marginTop:"10px"}}>Addtask</p>
    </Link>

   </div>
   
    </>

  )
}

export default Navbar