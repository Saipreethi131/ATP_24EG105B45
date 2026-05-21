import EditCounter1 from "./Components/EditCounter1"
import EditCounter2 from "./Components/EditCounter2"
import EditCounter3 from "./Components/EditCounter3"
import EditCounter4 from "./Components/EditCounter4"

function App() {
  return (
    <div className="bg-gray-400 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
       <p className="m-2 rounded-3xl"> <EditCounter1/></p>
        <p className="m-2 rounded-3xl"> <EditCounter2/></p>
         <p className="m-2 rounded-3xl"> <EditCounter3/></p>
          <p className="m-2 rounded-3xl"> <EditCounter4/></p>
        
    </div>
  )
}

export default App