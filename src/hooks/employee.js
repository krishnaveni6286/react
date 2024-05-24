import { useState } from "react"


const EmployeeUse =()=>{
   const[emp,setEmp]= useState([
    {
        "Id":101,
        "name":"Nobi",
        "salary":20000
    },
    {
        "Id":102,
        "name":"Arjun",
        "salary":25000
    },
    {
        "Id":101,
        "name":"Ramu",
        "salary":50000
    }
   ])
   const handlerEmp=()=>{
    let newEmp=[...emp,{ Id:104,name:"hello",salary:30000}]
    setEmp(newEmp)

   }
   const handleDel=(index)=>{
    let result=emp.filter((emp,id)=>{
        return !id==index
    })
    setEmp(result)
   }
   return(
        <>
        <button onClick={handlerEmp}>Add emp</button>
      {
            emp.map((val,index)=>
            <>{
               <>
                <li>{val.Id}</li>
                <li>{val.name}</li>
                <li>{val.salary}</li>
                <button onClick={()=>handleDel(index)}>Delete</button>
                </>
                
            }
            </>)

        }
        </>
    )
}
export default EmployeeUse;