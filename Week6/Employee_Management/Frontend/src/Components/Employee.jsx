import { useLocation, useNavigate } from "react-router"

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold text-slate-800">Profile Not Found</h2>
        <p className="text-sm text-slate-500 mt-2 font-light">No employee record was provided to load details.</p>
        <button onClick={() => navigate("/listofemps")} className="btn-minimal-secondary px-5 py-2 mt-4 text-xs">
          Go to Directory
        </button>
      </div>
    );
  }

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="max-w-xl mx-auto py-4">
      <div className="minimal-card overflow-hidden border border-slate-200 bg-white">
        
        {/* Simple grey top banner instead of rainbow gradient */}
        <div className="h-20 bg-slate-100 border-b border-slate-200" />

        <div className="px-6 pb-6 relative">
          
          {/* Avatar and Title Section */}
          <div className="flex flex-col items-center -mt-10 mb-6 text-center">
            <div className="h-20 w-20 rounded-xl bg-slate-900 border-2 border-white shadow-sm flex items-center justify-center text-xl font-bold text-white">
              {getInitials(state.name)}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">{state.name}</h2>
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 mt-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
              {state.designation || "Roster Staff"}
            </span>
          </div>

          {/* Detailed Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Contact Details Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                📞 Contact Info
              </h3>
              <div className="flex flex-col gap-2 text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase">Email</p>
                  <p className="text-slate-800 font-medium break-all mt-0.5">{state.email}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase">Mobile</p>
                  <p className="text-slate-800 font-medium mt-0.5">{state.mobile || "Not Provided"}</p>
                </div>
              </div>
            </div>

            {/* Corporate Profile Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                🏢 Company Info
              </h3>
              <div className="flex flex-col gap-2 text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase">Company</p>
                  <p className="text-slate-800 font-medium mt-0.5">{state.companyname || "EmpSphere Inc."}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase">Status</p>
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center mt-8">
            <button 
              onClick={() => navigate("/listofemps")}
              className="btn-minimal-secondary px-5 py-2.5 text-xs flex items-center justify-center gap-1 cursor-pointer"
            >
              ⬅️ Back
            </button>
            <button 
              onClick={() => navigate("/edit-emp", { state })}
              className="btn-minimal-primary px-5 py-2.5 text-xs flex items-center justify-center gap-1 cursor-pointer"
            >
              📝 Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Employee;