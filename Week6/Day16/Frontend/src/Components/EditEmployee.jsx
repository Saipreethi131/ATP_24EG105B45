
import { useForm } from "react-hook-form";
import {useLocation} from "react-router"
import { useNavigate } from "react-router";
import {useEffect} from "react"
import axios from "axios"

function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm();

  const{state}=useLocation();
  const navigate=useNavigate()

  useEffect(() => {
    setValue("name", state.name);
    setValue("email", state.email);
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyname", state.companyname);
  }, [setValue, state.name, state.email, state.mobile, state.designation, state.companyname]);

  const savemodifiedEmp=async(modifiedEmp)=>{

    console.log(modifiedEmp)

    //make http PUT request
    const res=await axios.put(`http://localhost:3000/employee-api/employees/${state._id}`,modifiedEmp)
    if (res.status ===200){
      navigate("/listofemps")
    }
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
       <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(savemodifiedEmp)}>
        <input
          type="text"
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
          disabled
        />

        <input
          type="number"
          {...register("mobile")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          {...register("companyname")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-400 text-white block mx-auto p-4">
          Save
        </button>
      </form>
    </div>
  )
}

export default EditEmployee