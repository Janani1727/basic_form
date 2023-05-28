import React, { useState } from 'react'

const Signup = () => {

  
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
// navigate("/login")
  console.log(res)


})
.catch(err=>console.log(err))

}


  return (

    

    <div style={{border:"1px solid black",height:"300px",width:"50%",marginLeft:"400px",marginTop:"60px"}}>
    <form>

       <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="text" placeholder='name'  name={name} value={name} onChange={(e)=>setName(e.target.value)}/>
       <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="number" placeholder='mobile number'  name={number} value={number} onChange={(e)=>setNumber(e.target.value)}/>
       <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="password" placeholder='password'  name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>

       <button style={{width:"50%",height:"40px" ,marginTop:"10px"}} onClick={handleSubmit}>register</button>

     </form>
   </div>

  )
}

export default Signup