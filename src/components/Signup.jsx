import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Signup = () => {

  const navigate=useNavigate()
  const [name,setName] = useState("")
  const [number,setNumber] = useState("")
  const [password,setPassword] = useState("")


let handleSubmit = async()=>{
  const payload ={
 name,
 number,
 password,
  }

await fetch("https://famous-mite-clothes.cyclic.app/users",{
method:"POST",
// mode:"no-cors",
body:JSON.stringify(payload),
headers:{
"Content-Type":"application/json"
}

}).then(res=>res.json())
.then(res=>{

  console.log(res)


})
.catch(err=>console.log(err))
alert(" user registered successfully")
navigate("/login")
}


  return (

    <>
    
     <h1 style={{textAlign:"center"}}>SignUp</h1>
    <div style={{padding:"20px",height:"300px",width:"50%",marginLeft:"400px",marginTop:"60px"}}>
    <form>

       <input style={{width:"90%",height:"40px" ,marginTop:"10px",fontSize:"20px",borderRadius:"10px"}} type="text" placeholder='name'  name={name} value={name} onChange={(e)=>setName(e.target.value)}/>
       <input style={{width:"90%",height:"40px" ,marginTop:"10px",fontSize:"20px",borderRadius:"10px"}} type="number" placeholder='mobile number'  name={number} value={number} onChange={(e)=>setNumber(e.target.value)}/>
       <input style={{width:"90%",height:"40px" ,marginTop:"10px",fontSize:"20px",borderRadius:"10px"}} type="password" placeholder='password'  name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>

       <input style={{cursor:'pointer',fontSize:"20px",border:"1px solid black",color:"white",backgroundColor:"black",textAlign:"center",width:"30%",height:"40px" ,marginTop:"22px",marginLeft:"30%",borderRadius:"10px"}}value="Register" onClick={handleSubmit
      }/>

     </form>
   </div>
   </>

  )
}

export default Signup