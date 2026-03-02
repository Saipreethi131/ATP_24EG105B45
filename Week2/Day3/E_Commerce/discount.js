const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
export function validateCoupon(couponCode, cartTotal, cartItems) {
 // 1. Check if coupon exists
 const coupon=coupons[couponCode]
 if(!coupon)
 {
    return {valid:false,message:"Invalid Coupon code"}
 }
 // 2. Check minimum amount requirements         
 if(cartTotal<coupon.minAmount)  
    {
    return{valid:false,message:`Minimum amount should be ${coupon.minAmount}`}
    }             
 // 3. Check category requirement (if any)
 // Return { valid: true/false, message: '...' }
 if(coupon.category)
 {
   const hasCategory=cartItems.find(item=>item.category===coupon.category)
 if(!hasCategory)
 {
    return{
        valid:false,
        message:`Coupon valid only for ${coupon.category} category`
    }
 }
}
return {valid:true ,message:"Coupon applied successfully"}
}

export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
// Return discount amount
const coupon= coupons[couponCode]
if(!coupon)
    return 0
if(coupon.type==="flat")
    return coupon.value
if(coupon.type==="percentage")
    return (coupon.value/100)*cartTotal
return 0
}

 export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
// 2. If valid, calculate discount
const validate= validateCoupon(couponCode, cartTotal, cartItems)
{
    if(!validate.valid)
    {
        return {
            originalTotal:cartTotal,
            discount:0,
            finalTotal:cartTotal,
            message:validate.message,
        }
    }
    const discount =calculateDiscount(couponCode,cartTotal)
// 3. Return final amount and discount details
// Return { 
//   originalTotal: ..., 
//   discount: ..., 
//   finalTotal: ...,
//   message: '...'
// }
    const finalTotal=cartTotal-discount;
    return {
        originalTotal:cartTotal,
        discount:discount,
        finalTotal:finalTotal,
        message:"Coupon applied successfully",
    }
}
}