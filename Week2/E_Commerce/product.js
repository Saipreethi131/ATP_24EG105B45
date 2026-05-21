 const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
export function getProductById(id) {
// Find and return product by ID
const prod=products.find(product=>product.id===id)
return prod;
}
export function getAllProducts() {
// Return all products
return products;
}
export function getProductsByCategory(category) {
// Filter products by category
const prod=products.filter(product=>product.category.toLowerCase()===category.toLowerCase())
return category;
}
export function searchProducts(query) {
// Search products by name (case-insensitive)
const search=products.find(product=>product.name.toLowerCase()===query.toLowerCase())
return search;
}
export function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false
const findprod =products.find(product=>product.id===productId)
if(findprod)
{
    if(findprod.stock>=quantity)
    return true
}
return false
}

export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
const findprod =products.find(product=>product.id===productId)
if(!findprod)
   return "Product not Found"
if(findprod.stock<quantity)
   return "Insufficient Stock"
findprod.stock -=quantity
return "Stock reduced Successfully"
}


