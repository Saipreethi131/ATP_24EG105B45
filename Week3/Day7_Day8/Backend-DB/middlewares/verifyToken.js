import jwt from 'jsonwebtoken'
const {verify}=jwt;
export function verifytoken(req,res,next){
    //token verification logic
   // console.log("token verification logic :",req.cookies.token)
   const token=req.cookies?.token;
   //if req from unauthorized user
   if(!token)
   {
    return res.status(401).json({message:"please login"})
   }
   try{
     //if token is existed
     const decodedToken =verify(token,'abcdef')
     req.user=decodedToken
    // console.log(decodedToken)
     /*verify function returns error if token is invalid. 
     if valid it decodes the token */
     //call next
      next();
   }catch(err){
      console.log("error")
    res.status(401).json({message:"session expired.Please Relogin"})
   }
}


/*app.use(verifyToken)-this executes middleware for all the requests 
both public and private routes -application level middleware*/
/*userapp.get(path,verifyToken,req-handler) - Route level middleware*/