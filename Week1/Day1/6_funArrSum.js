//write a function that recieves an array as arg and return their sum

//function Expression
let sumArr = function(arr)
{
    let sum=0;
    for(let element of arr)
    {
        sum+=element;
    }
    return sum;
}
//function call
let result= sumArr([10,20,30,40,50])
console.log(`Sum of array is ${result}`);