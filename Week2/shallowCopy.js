/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------*/
const user = {
   id: 101,
   name: "Ravi",
   preferences: {
        theme: "dark",
        language: "en"
    }
};
// 1. Create a shallow copy of user
let shallowcopy ={...user}
//change the name in the copied object
shallowcopy.name="Preethi"
//change the preferences.theme in the copied object
shallowcopy.preferences.theme="light"
//.Log both original and copied objects
console.log(user)
console.log(shallowcopy)
