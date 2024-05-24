import useCounter from "../customhooks/setcounterhook";
import Header from "../navbar/header";
import UseEffectEx4 from "../useeffcet/useeffectex4";
import ProfilerExample from "../usememocb/usecallback";
import UseMemoExample from "../usememocb/usememo";




const ProfileComponent=()=>{
  const [count,setCount]=useCounter(10)
    return(
        <>
        <Header/>
      
        <h2>Profile screen</h2>
      {/* <UseMemoExample/> */}
      <ProfilerExample/>
      <UseEffectEx4/>
      <h2>{count}</h2>
      {/* <button onClick={setCount}>increment</button> */}
      <button onClick={()=>setCount(2)}>increment</button>
       
        </>
        
    )
}
export default ProfileComponent;