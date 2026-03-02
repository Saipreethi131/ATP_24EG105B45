/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.*/

const temperatures = [32, 35, 28, 40, 38, 30, 42];

//1.filter() temperatures above 35
const res1=temperatures.filter(temp=>temp>35)
console.log("Temperatures above 35",res1)

//2.map() to convert all temperatures from Celsius → Fahrenheit
const res2=temperatures.map(temp=>temp*(9/5)+32)
console.log("Temperatures in Fahrenheit",res2)

//3.reduce() to calculate average temperature
const sum=temperatures.reduce((acc,temp)=>acc+temp)
const avg=sum/temperatures.length
console.log("Average Temperature :",avg)

//4.find() first temperature above 40
const res4=temperatures.find(temp=>temp>40)
console.log("Temperature above 40:",res4)

//5.findIndex() of temperature 28
const res5=temperatures.findIndex(temp=>temp===28)
console.log("Index of Temperature 28:",res5)