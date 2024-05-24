import { useCallback, useState } from "react";
import CustomButton from "./custombutton";




const ProfilerExample=()=>{
    const [age,setAge]=useState(100)
    const [salary,setSalary]=useState(100)

    const handleAge= useCallback(()=>{
        setAge(age+10)
    },[age])

    const handleSalary= useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return(
        <>
        <h2>age.{age}</h2>
        <h2>salary.{salary}</h2>
        <CustomButton onClick={handleAge}>Age increment</CustomButton>
        <CustomButton onClick={handleSalary}>salary increment</CustomButton>
        </>
    )
}
export default ProfilerExample;