/*write a function that receives an array and search element as args
and return the index of that search element in the array. It should
return "not found" when search element is not found.*/

//arrow function
let search=(arr,searchElement)=>{
    for(let index=0;index<arr.length;index++)
    {
        if(arr[index]===searchElement)
            return index;
    }
    return "not found";
}
//function call
let result=search([12,14,16,28,46],46)
console.log(`Element found at index :${result}`);