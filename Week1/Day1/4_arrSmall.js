//Find the smallest element in marks array

let marks=[90,78,65,89,98];
//initialize smallest with first element of array
let smallest=marks[0];
for(let element of marks)
{
    if(element < smallest) 
     smallest = element;
}
console.log("Smallest marks :",smallest);