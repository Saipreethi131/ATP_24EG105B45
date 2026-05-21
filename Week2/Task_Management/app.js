/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist */

import {addTask,getAllTasks,completeTask} from './task.js'

console.log('=== Task Management System ===\n')
 // 1. Add some tasks
console.log(addTask("FCA record","high","2026-03-01"))
console.log(addTask("DBMS record","medium","2026-04-23"))
console.log(addTask("Hackathon","Important","2026-04-10"))
console.log(addTask("Assignment","high","2026-04-12"))

 // 2. Display all tasks
 console.log("All Tasks:")
 console.log(getAllTasks())
 // 3. Complete a task
 console.log(completeTask(1))
 // 4. Display all tasks again
 console.log("All Tasks:")
console.log(getAllTasks())