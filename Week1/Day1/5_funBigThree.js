//write a function that receives 3 number args and return the big number

//function expression
let biggest =function(num1,num2,num3){
    if(num1>=num2 && num1>=num3)
        return num1;
    else if(num2>=num1 && num2>=num3)
        return num2;
    else
        return num3;
}
//function call
let result =biggest(40,35,80)
console.log(`${result} is biggest`);