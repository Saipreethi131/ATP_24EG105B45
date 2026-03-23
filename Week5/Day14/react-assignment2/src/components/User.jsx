function User(props){
    let {userObj}=props
    
    return (
    <div className="test-center p-5 shadow-2xl rounded-3xl shadow-gray-400">
       <h2 className="text-3xl text-black">{userObj.name}</h2>
       <h2 className="font-bold mt-5">{userObj.email}</h2>
       <img src={userObj.image} alt="" className="=block mx-auto rounded-3xl mt-5" />
    </div>
    );
}
export default User;