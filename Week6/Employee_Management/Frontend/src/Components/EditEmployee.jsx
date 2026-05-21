import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3000' : '');

function EditEmployee() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: formErrors }
  } = useForm({
    mode: "onTouched"
  });

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyname", state.companyname);
    }
  }, [setValue, state]);

  const savemodifiedEmp = async (modifiedEmp) => {
    try {
      setLoading(true);
      setError("");
      
      const res = await axios.put(`${API}/employee-api/employees/${state._id}`, modifiedEmp);
      if (res.status === 200) {
        navigate("/listofemps");
      }
    } catch (err) {
      console.log("error saving modifications", err);
      setError(err.response?.data?.message || err.message || "Failed to update employee details");
    } finally {
      setLoading(false);
    }
  };

  if (!state) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold text-slate-800">No Employee Selected</h2>
        <p className="text-sm text-slate-500 mt-2 font-light">Please select an employee profile from the directory list first.</p>
        <button onClick={() => navigate("/listofemps")} className="btn-minimal-secondary px-5 py-2 mt-4 text-xs">
          Go to Directory
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-4">
      <div className="minimal-card p-6 md:p-8 border border-slate-200 bg-white">
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Edit Employee Details</h2>
          <p className="text-xs text-slate-500 mt-1 font-light">Update existing team database entry values.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-xs font-medium">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit(savemodifiedEmp)} className="flex flex-col gap-4">
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              {...register("name", { required: "Name is required" })}
              className={`w-full bg-white border rounded-lg p-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 ${
                formErrors.name ? "border-red-400" : "border-slate-300"
              }`}
            />
            {formErrors.name && (
              <span className="text-red-500 text-[11px] font-medium">{formErrors.name.message}</span>
            )}
          </div>

          {/* Email Field (Disabled) */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-400">Email Address (Cannot be edited)</label>
            <input
              type="email"
              disabled
              {...register("email")}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-400 cursor-not-allowed"
            />
          </div>

          {/* Mobile Field */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-700">Mobile Number</label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              {...register("mobile", { 
                required: "Mobile number is required",
                minLength: { value: 10, message: "Should be at least 10 digits" }
              })}
              className={`w-full bg-white border rounded-lg p-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 ${
                formErrors.mobile ? "border-red-400" : "border-slate-300"
              }`}
            />
            {formErrors.mobile && (
              <span className="text-red-500 text-[11px] font-medium">{formErrors.mobile.message}</span>
            )}
          </div>

          {/* Designation Field */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-700">Designation</label>
            <input
              type="text"
              placeholder="e.g. Lead Software Engineer"
              {...register("designation", { required: "Designation is required" })}
              className={`w-full bg-white border rounded-lg p-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 ${
                formErrors.designation ? "border-red-400" : "border-slate-300"
              }`}
            />
            {formErrors.designation && (
              <span className="text-red-500 text-[11px] font-medium">{formErrors.designation.message}</span>
            )}
          </div>

          {/* Company Name Field */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-700">Company Name</label>
            <input
              type="text"
              placeholder="e.g. EmpSphere Inc."
              {...register("companyname", { required: "Company name is required" })}
              className={`w-full bg-white border rounded-lg p-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 ${
                formErrors.companyname ? "border-red-400" : "border-slate-300"
              }`}
            />
            {formErrors.companyname && (
              <span className="text-red-500 text-[11px] font-medium">{formErrors.companyname.message}</span>
            )}
          </div>

          {/* Save Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-minimal-primary py-2.5 mt-2 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Saving Changes..." : "Save Modifications"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;