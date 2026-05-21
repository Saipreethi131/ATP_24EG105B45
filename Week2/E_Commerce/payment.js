import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
const items= [...getCartItems()]
if(items.length===0)
    return {
    status:"failed",
    message:"Cart is empty"
}
// 2. Apply discount if coupon provided
let subtotal=getCartTotal()
let discount=0
let total=subtotal
if(couponCode)
{
    const dis=applyDiscount(subtotal,couponCode,items);
    discount=dis.discount;
    total=dis.finalTotal;
}
// 3. Validate payment method (card/upi/cod)
if(!validatePaymentMethod(paymentMethod))
{
    return {
        status:"failed",
        message:"Inavlid payment method"
    }
}
// 4. Process payment (simulate)
const paymentsuccess =true
if(!paymentsuccess)
{
    return{
        status:"failed",
        message:"payment failed"
    }
}
// 5. Reduce stock for all items
for(let item of items)
{
    reduceStock(item.productId,item.quantity)
}
// 6. Clear cart
clearCart();
// 7. Generate order summary
return{
    orderId:generateOrderId(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status:"success",
    message:"Order placed successfully"
}
}
                          
export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
const validpayment =["card","upi","cod"]
return validpayment.includes(method)
}
                          
                          
function generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}