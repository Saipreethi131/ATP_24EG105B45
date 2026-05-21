function Product(props){        //props-properties
    const {productObj}=props
    //state
    //react element
    return(
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-xl shadow-md">
            <h2 className="text-2xl text-red-600">{productObj.title}</h2>
            <h2 className="text-2xl text-black">{productObj.price}</h2>
            <h2 className="text-2xl text-black">{productObj.description}</h2>
        </div>
    )
}
export default Product;