function validateTitle(title)
{
    if(!title)
      return "Title cannot be empty"
    if(title.length <= 3)
      return "Title too short"
    return true
}
function validatePriority(priority)
{
 const priorities =["low","medium","high"]
 if(!priorities.includes(priority))
 {
   return "Priority must be low ,medium or high"
 }
return true;
}
function validateDuedate(date)
{
    let dueDate=new Date(date)
    let today=new Date()
    if(dueDate<=today)
        return "Invalid-Date must be a future Date"
    return true
}

//named export
export {validateTitle,validatePriority,validateDuedate};