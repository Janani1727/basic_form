import React, { useState } from 'react'

const AddTask = () => {

 const  [name,setName]=useState("")
 const [model,setModel]=useState("")
 const [year,setYear]=useState("")
 const [mileage,setMileage]=useState("")
 const [price,setPrice]=useState("")

 const handleSubmit = async()=>{

  alert("task added successfully")

  const payload ={
     name,
     model,
     year,
     mileage,
     price
       }
       await fetch("https://famous-mite-clothes.cyclic.app/task",{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
          "Content-Type":"application/json"
          }
          
          }).then(res=>res.json())
          .then(res=>{
              console.log(res)

             
             
          })
          .catch(err=>console.log(err))

          
          }



  return (
    <div style={{border:"1px solid black",height:"400px",width:"50%",marginLeft:"400px",marginTop:"60px"}}>
      <form>

      

    <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="text" placeholder='car name' name={name} value={name} onChange={(e)=>setName(e.target.value)}/>
    <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="text" placeholder='model of car' name={model} value={model} onChange={(e)=>setModel(e.target.value)}/>
    <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="number" placeholder='model year' name={year} value={year} onChange={(e)=>setYear(e.target.value)}/>
    <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="number" placeholder='mileage' name={mileage} value={mileage} onChange={(e)=>setMileage(e.target.value)}/>
    <input style={{width:"97%",height:"40px" ,marginTop:"10px",fontSize:"20px"}} type="number" placeholder='price' name={price} value={price} onChange={(e)=>setPrice(e.target.value)}/>

    <button style={{width:"40%",height:"40px" ,marginTop:"10px"}} onClick={handleSubmit}>Add Task</button>
    </form>
</div>
  )
}

export default AddTask