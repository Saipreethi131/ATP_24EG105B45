/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.*/

const cart = [
{ id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
{ id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
{ id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
{ id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

   // 1. Use filter() to get only inStock products
   const instockProducts=cart.filter(item=>item.inStock===true)
   console.log("Instock Products :",instockProducts)

   // 2. Use map() to create a new array with:  { name, totalPrice }
   const mappedProducts=instockProducts.map(item=>({
    name:item.name,
    totalPrice: item.price*item.quantity})
   );
   console.log(mappedProducts);


   // 3. Use reduce() to calculate grand total cart value
   const grandTotal=cart.reduce((acc,item)=>acc+item.price,0)
   console.log("Toatl Cart Value:",grandTotal)

   // 4. Use find() to get details of "Mouse"
   const mouseDetails=cart.find(item=>item.name==='Mouse')
   console.log(mouseDetails)

   // 5. Use findIndex() to find the position of "Keyboard"*/
   const index=cart.findIndex(item=>item.name==='Keyboard')
   console.log("Index of Keyboard: ",index)
