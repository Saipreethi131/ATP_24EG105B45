/*ASSIGNMENT 3:
-------------
Employee Payroll Processor
You are building a salary processing module in a company HR app.*/


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


//1. filter() employees from IT department
const dept=employees.filter(employee=>employee.department==="IT")
console.log("Employees from IT department :",dept)

/*  2. map() to add:
    netSalary = salary + 10% bonus*/
const addBonus=employees.map(employee=>{
    const netSalary= employee.salary+(0.10*employee.salary);
    return {...employee,netsalary:netSalary}
});
console.log("After Adding Bonus:",addBonus)


//3. reduce() to calculate total salary payout
const totalSalary =addBonus.reduce((acc,employee)=>acc+employee.netsalary,0)
console.log("Total Salary Payout :",totalSalary)

//4. find() employee with salary 30000
const find=employees.find(employee=>employee.salary===30000)
console.log("Employee with salary 30000:",find)

//5. findIndex() of employee "Neha"
const index =employees.findIndex(employee=>employee.name==="Neha")
console.log("Index of Neha :",index)