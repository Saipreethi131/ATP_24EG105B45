import { NavLink} from "react-router"

function Header() {
  return (
    <div>
        <nav className="flex justify-end gap-5 text-3xl p-7 bg-amber-200">
            <NavLink to="/" className={({isActive})=>(isActive)?"":""}>Home</NavLink>
            <NavLink to="create-emp" className={({isActive})=>(isActive)?"":""}>CreateEmployee</NavLink>
            <NavLink to="listofemps" className={({isActive})=>(isActive)?"":""}>Employees</NavLink>
        </nav>
    </div>

  )
}

export default Header