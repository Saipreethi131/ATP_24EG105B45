/*ASSIGNMENT 2:
-------------
Student Performance Dashboard
You are working on a college result analysis system.*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1. filter() students who passed (marks ≥ 40)
const passedStudents=students.filter(student=>student.marks>=40)
console.log("Passed Students :",passedStudents)

/*2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D*/
const studentgrade=students.map(student=>{
    let grade;
    if(student.marks>=90)
        grade='A'
    else if(student.marks>=75)
        grade='B'
    else if(student.marks>=60)
        grade='C'
    else
        grade='D'
    return {...student,grade}//... spread operator
})
console.log("Grades:",studentgrade)


//3. reduce() to calculate average marks
let sum=students.reduce((acc,student)=>acc+student.marks,0)
const avg =sum/students.length
console.log("Average marks: ",avg)

//4. find() the student who scored 92
const stud =students.find(student=>student.marks===92)
console.log("Student who scored 92 :",stud)

//5. findIndex() of student "Kiran"
const index =students.findIndex(student=>student.name==="Kiran")
console.log("Index of Kiran :",index)
