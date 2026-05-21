/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

//1. filter() courses with name length > 5
const r1=courses.filter(course=>course.length>5)
console.log("Courses with length>5",r1)


//2. map() to convert course names to uppercase
const r2=courses.map(course=>course.toUpperCase())
console.log("Uppercase:",r2)


//3. reduce() to generate a single string:
//"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const r3 =courses.reduce((acc,course)=>acc+' | '+course)
console.log(r3)


// 4. find() the course "react"
const r4 =courses.find(course=>course==="react")
console.log(r4)


// 5. findIndex() of "node"
const r5=courses.findIndex(course=>course==="node")
console.log("Index of course node:",r5)