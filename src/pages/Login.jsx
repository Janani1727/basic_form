import React from 'react'

const Login=()=>{

  
  // const [number,setNumber] = useState("")
  // const [password,setPassword] = useState("")

  const handleSubmit = async(event)=>{
    
    event.preventDefault();
    let number=document.getElementById("number").value;
    let password=document.getElementById("password").value;
 
let obj={number,password}

  await fetch(`https://famous-mite-clothes.cyclic.app/users`)
  .then((res)=>res.json())
  .then((res)=>{
        let isMatch=false
        res.forEach((el)=>{
            if(el.number===obj.number && el.password===obj.password){
             isMatch=true;
             alert("Login Sucessful!!")    
            // }else if(el.number==="" && el.password===" "|| obj.number==="" && obj.password===""){
            //     alert("Credential required")
            // }else if(!isMatch){
            //     alert("Login Failed")
            }
        })
       
    }
  )
  }

 

  return (
    <div style={{border:"1px solid black",height:"300px",width:"50%",marginLeft:"400px",marginTop:"60px"}}>
    <form>
    
    <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="number"  id="number" placeholder='mobile number'   />
    <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="password" id="password" placeholder='password' />

    <button style={{width:"50%",height:"40px" ,marginTop:"10px"}} onClick={handleSubmit}>Login</button>
   </form>
</div>
  )
}

export default Login