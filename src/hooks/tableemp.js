import { useState } from "react";
import { Collapse } from "react-bootstrap";

const EmployeeUseTable = () => {
  const [emp, setEmp] = useState([
    {
      Id: 101,
      name: "Nobi",
      salary: 20000,
    },
    {
      Id: 102,
      name: "Arjun",
      salary: 25000,
    },
    {
      Id: 101,
      name: "Ramu",
      salary: 50000,
    },
  ]);
  const handlerEmp = () => {
    let newEmp = [...emp, { Id: 104, name: "hello", salary: 30000 }];
    setEmp(newEmp);
  };
  const handleDel=(index)=>{
    let result=emp.filter((emp,id)=>{
        return !id==index
    })
    setEmp(result)
   }
  return (
    <>
      <button onClick={handlerEmp}>Add emp</button>
      <table
        style={{
          border: "1px solid black",
          width: "400px",
          height: "200px",
         borderCollapse:"collapse",
         backgroundColor:"yellow"
        }}
      >
        <tr style={{ border: "2px solid black" }}>
          <th>Id</th>
          <th>name</th>
          <th>salary</th>
          <th>Delete</th>
        </tr>

        {emp.map((val,index) => (
          <>
            {
              <>
                <tr style={{ border: "2px solid black" }}>
                  <td>{val.Id}</td>
                  <td>{val.name}</td>
                  <td>{val.salary}</td>
                  <td><button onClick={()=>handleDel(index)}>Delete</button></td>
                </tr>
              </>
            }
          </>
        ))}
      </table>
    </>
  );
};
export default EmployeeUseTable;
