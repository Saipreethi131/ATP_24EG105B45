import { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import axios from "axios"

const API = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3000' : '');

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const gotoemployee = (empObj) => {
    navigate("/employee", { state: empObj })
  }

  const editemployee = (empObj) => {
    navigate("/edit-emp", { state: empObj })
  }

  const deleteEmp = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee record?")) {
      try {
        let res = await axios.delete(`${API}/employee-api/employees/${id}`)
        if (res.status === 200) {
          getEmps()
        }
      } catch (err) {
        console.error("Error deleting employee:", err);
        alert(err.response?.data?.message || err.message || "Failed to delete employee");
      }
    }
  }

  async function getEmps() {
    try {
      setLoading(true);
      setError("");
      let res = await axios.get(`${API}/employee-api/employees`);
      if (res.status === 200) {
        let resObj = res.data
        setEmps(resObj.payload || []);
      }
    } catch (err) {
      console.error("Error fetching employees:", err);
      setError(err.response?.data?.message || err.message || "Unable to load employees");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEmps();
  }, []);

  const filteredEmps = emps.filter((emp) => {
    const query = searchQuery.toLowerCase();
    return (
      emp.name?.toLowerCase().includes(query) ||
      emp.email?.toLowerCase().includes(query) ||
      emp.designation?.toLowerCase().includes(query) ||
      emp.companyname?.toLowerCase().includes(query)
    );
  });

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Title & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Employee Directory</h1>
          <p className="text-xs text-slate-500 font-light mt-1">Search, view, and manage listed staff records.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
            Staff Count: <span className="text-slate-900 font-bold ml-1">{emps.length}</span>
          </div>
          <button 
            onClick={getEmps} 
            className="flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors text-xs cursor-pointer"
            title="Refresh Directory"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="flex items-center gap-3 bg-white px-4 py-2 border border-slate-200 rounded-lg shadow-sm">
        <span className="text-slate-400 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Search by name, role, email, or company..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-slate-900 border-none outline-none placeholder-slate-400 text-sm focus:ring-0"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")} 
            className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-500 px-2 py-1 rounded transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="animate-spin h-6 w-6 border-2 border-slate-900 border-t-transparent rounded-full" />
          <p className="text-xs text-slate-400 font-medium">Synchronizing roster directory...</p>
        </div>
      ) : error ? (
        <div className="minimal-card p-6 border border-slate-200 text-center max-w-sm mx-auto flex flex-col items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <h3 className="text-base font-bold text-slate-900">Database Connection Failed</h3>
          <p className="text-xs text-slate-500 font-light leading-relaxed">{error}</p>
          <button onClick={getEmps} className="btn-minimal-primary px-4 py-2 text-xs mt-1">
            Retry Connection
          </button>
        </div>
      ) : filteredEmps.length === 0 ? (
        <div className="minimal-card p-8 border border-slate-200 text-center max-w-sm mx-auto flex flex-col items-center gap-3">
          <span className="text-3xl">📭</span>
          <h3 className="text-base font-bold text-slate-900">No Records Found</h3>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            {searchQuery 
              ? "No search results match your criteria. Try different keywords!"
              : "No employees registered. Add a team member to start."}
          </p>
          {!searchQuery && (
            <button onClick={() => navigate("/create-emp")} className="btn-minimal-primary px-4 py-2 text-xs mt-1">
              Add First Employee
            </button>
          )}
        </div>
      ) : (
        /* Grid list */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredEmps.map((empObj) => (
            <div 
              key={empObj._id} 
              className="minimal-card p-5 border border-slate-200 flex flex-col justify-between gap-5 hover:border-slate-400 transition-colors"
            >
              {/* Avatar & Basic Info */}
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                  {getInitials(empObj.name)}
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                  <h3 className="font-bold text-base text-slate-900 truncate px-1" title={empObj.name}>
                    {empObj.name}
                  </h3>
                  <span className="text-xs text-slate-500 truncate max-w-full">
                    {empObj.designation || "Roster Staff"}
                  </span>
                </div>
              </div>

              {/* Company & Email Detail */}
              <div className="flex flex-col gap-1 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                <p className="truncate" title={empObj.companyname}><span className="font-semibold text-slate-600">Company:</span> {empObj.companyname || "EmpSphere Inc."}</p>
                <p className="truncate" title={empObj.email}><span className="font-semibold text-slate-600">Email:</span> {empObj.email}</p>
              </div>

              {/* Minimalist Action Buttons */}
              <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-100">
                <button 
                  onClick={() => gotoemployee(empObj)}
                  className="btn-minimal-secondary py-1 text-[11px] font-medium text-center cursor-pointer"
                >
                  View
                </button>
                <button 
                  onClick={() => editemployee(empObj)}
                  className="btn-minimal-secondary py-1 text-[11px] font-medium text-center cursor-pointer"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteEmp(empObj._id)} 
                  className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg py-1 text-[11px] font-medium text-center cursor-pointer transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListOfEmps;