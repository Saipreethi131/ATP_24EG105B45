import { useState } from "react";
import { useForm } from "react-hook-form";

function UserForm() {
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

  //form submit function
    const onFormSubmit = (userobj) => {
        setUsers((prevUsers) => [...prevUsers, userobj]);
        reset();
  };
   
    return (
        <div className="mt-5">
        <div className="bg-gray-200">
                {/*FORM */}
            <h1 className="text-center text-5xl">CREATE USER</h1>
            
            <form className="max-w-md mx-auto mt-10 " onSubmit={handleSubmit(onFormSubmit)}>

                {/*FIRST NAME*/ }
                <div className="mb-3">
                <label htmlFor="firstname">First Name</label>
                <input type="text"  {...register("firstname",
                {
                    required:"First Name cannot be empty",
                }
            )} id="firstname"
            className="border w-full p-3" />

             {errors.firstname?.type === "required" && 
            <p className="text-red-600" >{errors.firstname.message}</p>}
            </div>

            {/*EMAIL*/ }
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="text"  {...register("email",
                {
                    required:"Email is required",
                }
            )} id="email"
            className="border w-full p-3" />

             {errors.email?.type === "required" && 
            <p className="text-red-600" >{errors.email.message}</p>}
            </div>

            {/*DATE OF BIRTH*/}
            <div className="mb-3">
                <label htmlFor="dob">Date Of Birth</label>
                <input type="date"  {...register("dob",
                {
                    required:"Date of Birth is Mandatory",
                }
            )} id="dob"
            className="border w-full p-3" />

             {errors.dob?.type === "required" && 
            <p className="text-red-600" >{errors.dob.message}</p>}
            </div>

            {/*SUBMIT BUTTON */}
            <button type="submit" className="bg-blue-300 p-5 block m-auto mb-5">Add New User</button>
            </form>
            </div>

        {/*TABLE */}

        <div className="bg-pink-100 max-w-mb mx-auto mt-10">
            <h2 className="text-center text-5xl mb-7">LIST OF USERS</h2>
        <table className="w-10 mx-auto text-center border-2 border-collapse p-3">
            <thead>
                <tr>
                    <th className="border-2 border-collapse p-5">FirstName</th>
                    <th className="border-2 border-collapse p-5">Email</th>
                    <th className="border-2 border-collapse p-5">DateOfBirth</th>
                </tr>
            </thead>
            <tbody>
            {users.length === 0 ? (
                <tr>
                    <td colSpan={3} className="border-2 border-collapse p-5">No users added yet</td>
                </tr>
            ) : (
                users.map((userObj, index) => (
                    <tr key={`${userObj.email}-${index}`}>
                        <td className="border-2 border-collapse p-3">{userObj.firstname}</td>
                        <td className="border-2 border-collapse p-3">{userObj.email}</td>
                        <td className="border-2 border-collapse p-3">{userObj.dob}</td>
                    </tr>
                ))
            )}


              
            </tbody>
        </table>
        </div> 
        </div>
    )
}
export default UserForm;