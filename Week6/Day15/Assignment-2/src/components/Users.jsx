import {useState,useEffect} from "react"

function Users(){
   
 const [count,setCount]=useState(0)
    const AddUser=()=>{
        setCount(count+1)
    }

    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);
    useEffect(()=>{
        async function getData(){
            setLoading(true)
            try{
                let res=await fetch ("https://jsonplaceholder.typicode.com/users")
                let userslist=await res.json();
                //update state
                setUsers(userslist);
            }
            catch(err){
                console.log("err is ",err);
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
      getData();
    },[]);

//loading state
if(loading){
    return <p className="text-center text-5xl">LOADING....</p>
}

//error state
if(error!=null){
    return <p className="text-center text-red-500 text-5xl">{error.message}</p>
}
    return (
        <div className="text-center mt-4 bg-pink-50">
            <h2 className="text-8xl mb-2">Users List</h2>
            <button className="bg-pink-300 p-4 block m-auto rounded-2xl mb-3">UsersCount:{count}</button>
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {users.map((userObj)=>(
                    <div
                        className="rounded-xl border border-gray-300 bg-pink-100 p-4  "
                        key={userObj.id}
                    >
                    <p>{userObj.name}</p>
                    <p>{userObj.username}</p>
                    <p>{userObj.email}</p>
                    <button className="bg-pink-300 p-3 block m-auto rounded-2xl mt-1" onClick={AddUser}>Add User</button>

                    </div>
                ))}
            </div>
        </div>
    );
}
export default Users;
