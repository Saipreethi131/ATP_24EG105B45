import { NavLink } from "react-router"

function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4 px-6">
        {/* Simple Text Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-slate-900">Employee Management</span>
        </div>

        {/* Minimal Navigation Links */}
        <nav className="flex items-center gap-4 text-sm font-medium">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-slate-100 text-slate-900 font-medium" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="create-emp" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-slate-100 text-slate-900 font-medium" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`
            }
          >
            Add Employee
          </NavLink>
          <NavLink 
            to="listofemps" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-slate-100 text-slate-900 font-medium" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`
            }
          >
            Directory
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header