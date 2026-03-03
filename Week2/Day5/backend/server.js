//create http server
import exp from 'express'
const app =exp()
/*Here app contains the express application which internally contains 
the http server*/

//use body parser middleware
app.use(exp.json())

//set a port number
const port =3000 
//listen() method is used to assign port number to http server
app.listen(port ,()=>console.log(`server listening to port ${port}...`))

//test data
let users=[]

//Create API 
//http://localhost:3000/users

//route to handle GET request of client
app.get('/users',(req,res)=>{
    res.json({message:"All Users",payload:users})
})

//route to handle POST request of client
app.post('/users',(req,res)=>{
    //get user from client
    const newUser =req.body
    //push user into users
    users.push(newUser)
    //send response
    res.json({message:"User created"})
    } )


//route to handle PUT request of client
app.put('/users',(req,res)=>{
    //get modified user from client{}
    let modifiedUser=req.body;
    //get index of existing u(ser in users array
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    //update user with index
    if(index===-1)
    {
        return res.json({message:"User not found"})
    }
    users.splice(index,1,modifiedUser)
    //send response
    res.json({message:"Updated User"})
})


//route to handle DELETE request of client
app.delete('/users/:id',(req,res)=>{
    //get id of user from url parameter
    let id=Number(req.params.id)//{id:'1'}
    //find index of user
    let index=users.findIndex(userObj=>userObj.id===id)
    //if user not found
    if(index===-1)
    {
        return res.json({message:"User not found"})
    }
    users.splice(index,1)
    res.json({message:"User Deleted"})
})

//route to read a user by id
app.get('/users/:id',(req,res)=>{
     let id =Number(req.params.id)//{id:'1'}
     let user=users.find(userObj=>userObj.id===id)
      if(user===undefined)
    {
        res.json({message:"User not found"})
    }
    res.json({message:"User",payload:users})
})

//create product API with below Operations
  //create new products({productId,name,brand,price})
  //read all products
  //read all product by brand
  //update a product
  //delete a product by id

  let products=[
    {productId:101,name:"Watch",brand:"Titan",price:2500},
    {productId:102,name:"Watch",brand:"fasttrack",price:3000},
    {productId:103,name:"phone",brand:"samsung",price:45000},
    {productId:104,name:"laptop",brand:"HP",price:70000}]
 //http://localhost:3000/products

//Route to read all products
app.get('/products',(req,res)=>{
    res.json({message:"All Products",payload:products})
})

//route to read all products by brand
app.get('/products/brand/:brand',(req,res)=>
{
    let brand=req.params.brand
    let filterproducts =products.filter(obj=>obj.brand===brand)
    if(filterproducts.length===0)
        return res.json({message:"No products with that brand"})
    res.json(filterproducts)
})

//route to create a new product
app.post('/products',(req,res)=>{
    //get product from client
    const newProduct=req.body;
    //push the product into products[]
    products.push(newProduct)
    //send the response
    res.json({message:"Product created"})
})

//route to update a product
app.put('/products',(req,res)=>{
    let updatedproduct =req.body
    let index=products.findIndex(obj=>obj.productId===updatedproduct.productId)
    if(index===-1)
    {
        return res.json({message:"Product not found"})
    }
    products.splice(index,1,updatedproduct)
    return res.json({message:"Product Updated"})
})

//route to delete a product by id
app.delete('/products/:id',(req,res)=>{
    let id =Number(req.params.id)//{id:'1'}
    //find index of user
    let index=products.findIndex(Obj=>Obj.productId===id)
    //if user not found
    if(index===-1)
    {
        return res.json({message:"Product not found"})
    }
    products.splice(index,1)
    res.json({message:"Product Deleted"})
});