import { Link } from "react-router"

function Home() {  
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-12 max-w-2xl mx-auto min-h-[60vh] animate-[fadeIn_0.3s_ease-out]">
      {/* Clean Minimalist Welcome Section */}
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        Welcome to the Employee Management Portal
      </h1>
      <p className="text-base text-slate-600 leading-relaxed font-light">
        A secure workspace tool to manage employee profiles, add new staff records, customize professional information, and look up details in the team database directory.
      </p>
      <div className="flex gap-3 mt-2 justify-center">
        <Link to="/listofemps" className="btn-minimal-primary px-6 py-2.5 text-sm">
          View Directory
        </Link>
        <Link to="/create-emp" className="btn-minimal-secondary px-6 py-2.5 text-sm">
          Add Employee
        </Link>
      </div>
    </div>
  )
}

export default Home