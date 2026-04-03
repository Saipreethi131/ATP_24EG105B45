import { useState, useEffect } from "react";
import {useNavigate} from "react-router"
import axios from "axios"

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate();
  
  
  const gotoemployee =(empObj)=>{
    navigate("/employee",{state:empObj})
  }

  const editemployee =(empObj)=>{
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmp =async(id) =>{
    let res=await axios.delete(`http://localhost:3000/employee-api/employees/${id}`,id)
    if (res.status===200)
    {
      getEmps()
    }
  }

  async function getEmps() {
      let res = await axios.get("http://localhost:3000/employee-api/employees");
      if (res.status === 200) {
        let resObj = res.data
        setEmps(resObj.payload);
      }
    }

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center mb-10">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  ">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p className="text-center ">{empObj.email}</p>
            <p className="text-center ">{empObj.name}</p>
            <div className="flex justify-around">
              <button onClick={()=>gotoemployee(empObj)}className="bg-green-400 p-2 rounded-2xl text-white">View</button>
              <button onClick={()=>editemployee(empObj)}className="bg-yellow-300 p-2 rounded-2xl text-white">Edit</button>
              <button onClick={() => deleteEmp(empObj._id)} className="bg-red-400 p-2 rounded-2xl text-white">Delete</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;