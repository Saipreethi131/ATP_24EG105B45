import exp from "express"
export const employeeapp=exp.Router()
import {employeemodel} from "../Models/EmployeeModel.js"

//Route to Create Employee
employeeapp.post("/create",async(req,res)=>{
  try{
    const empobj =req.body
    const employeedoc =new employeemodel(empobj)
    await employeedoc.save()
    res.status(201).json({message:"Employee Created"})
  }
  catch(err){
    res.status(400).json({message:err.message})
  }
})

//Route to read all employees
employeeapp.get("/employees",async(req,res)=>{
    let employeelist = await employeemodel.find()
    //send res
    res.status(200).json({message:"Employees",payload:employeelist})
})

//Route to Edit employees
employeeapp.put("/employees/:id",async(req,res)=>{
    const modifiedemployee =req.body
    const uid=req.params.id;

    const updatedemployee= await employeemodel.findByIdAndUpdate(uid,
    {$set:{ ...modifiedemployee}},{returnDocument:"after",runValidators:true});

    if(!updatedemployee){
  return res.status(404).json({message:"Employee not found"})
   }
res.status(200).json({message:"Employee updated",payload:updatedemployee})
 })


//Route to Delete Employees
employeeapp.delete("/employees/:id", async (req, res) => {
    let uid=req.params.id
  let deletedEmp = await employeemodel.findByIdAndDelete(uid);
  //console.log(deletedEmp)
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});