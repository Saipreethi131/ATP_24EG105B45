import {validateTitle,validatePriority,validateDuedate} from './validator.js';
let tasks=[];
export function addTask(title,priority,duedate)
{
  const titleCheck=validateTitle(title)
  if(titleCheck!==true)
    return titleCheck;

  const priorityCheck=validatePriority(priority)
  if(priorityCheck!==true)
    return priorityCheck;

  const dateCheck=validateDuedate(duedate)
  if(dateCheck!==true)
    return dateCheck;

    const newtask={
    taskid :tasks.length+1,
    title:title,
    priority:priority,
    duedate:duedate,
    status:"pending"
  }
   tasks.push(newtask);
   return "Task added successfully";
}
export function getAllTasks(){
    return tasks;
}
export function completeTask(taskId) {
  //find and mark as completed
const task= tasks.find(t=>t.taskid===taskId)
if(!task)
  return "Task not found"
task.status="completed"
return "Task Completed"
}