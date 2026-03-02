/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.*/

const studentMarks = [78, 92, 35, 88, 40, 67];

//1. filter() marks ≥ 40 (pass marks)
const res1= studentMarks.filter(marks=>marks>=40)
console.log("Students with pass marks",res1)

//2. map() to add 5 grace marks to each student
const res2=studentMarks.map(marks=>marks+5)
console.log("Marks after adding grace marks",res2)

//3. reduce() to find highest mark
const res3=studentMarks.reduce((acc,marks)=>marks>acc?marks:acc)
console.log("Highest Mark:",res3)

//4. find() first mark below 40
const res4=studentMarks.find(marks=>marks<40)
console.log("Marks below 40 :",res4)

//5. findIndex() of mark 92
const res5=studentMarks.findIndex(marks=>marks===92)
console.log("Index of marks 92:",res5)