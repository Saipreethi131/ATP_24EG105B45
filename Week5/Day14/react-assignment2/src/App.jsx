import UserList from "./components/UserList"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
//import Counter from "./Counter"
function App(){
  //state
  //return react element

  return (
   <div>
    <Navbar />
    <div className="m-16 min-h-screen">
    <UserList />
    </div>
    <Footer />
    </div>
    );
/*
  <div>
    <Counter />
  </div>
  */
}
export default App;