import { getProductById, checkStock } from './product.js';
let cartItems = [];
 export function addToCart(productId, quantity) {
 // 1. Get product details
 const product=getProductById(productId);
 if(!product)
    return "product not found"
 // 2. Check stock availability
 if(!checkStock(productId,quantity))
    return "Insufficient stock"
 // 3. Check if product already in cart
 //    - If yes, update quantity
 //    - If no, add new item
 const checkcart=cartItems.find(item=>item.productId===productId)
 // 4. Return success/error message
 if(checkcart){
    checkcart.quantity +=quantity;
 }
 else
 {
    cartItems.push({
        productId:product.id,
        name:product.name,
        price:product.price,
        category:product.category,
        quantity:quantity,
    })
 }
 return "Added to cart Succesfully"
}
                          
export function removeFromCart(productId) {
const index=cartItems.findIndex(product=>product.productId===productId)
if(index===-1)
{
    return "product not in the cart";
}
cartItems.splice(index,1);
return "Product removed from cart";
}
                          
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
const item= cartItems.find(item=>item.productId===productId)
if(!item)
    return "product not found in the cart";
if(!checkStock(productId,item.quantity))
    return "Insuffiecient Stock";
item.quantity =newQuantity;
return "Quantity updated successfully";
}
                          
export function getCartItems() {
// Return all cart items with product details
return cartItems;
}
                          
export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
const total=cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)
return total
}
                          
export function clearCart() {
// Empty the cart
 cartItems.length=0;
 return "cart cleared successfully"
}