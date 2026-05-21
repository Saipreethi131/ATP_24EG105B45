import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

const API = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3000' : '');

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm({
    mode: "onTouched"
  });

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      setError("");
      
      let res = await fetch(`${API}/employee-api/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        navigate("/listofemps");
      } else {
        const contentType = res.headers.get("content-type");
        let errorMessage = "Unable to create employee";
        if (contentType && contentType.includes("application/json")) {
          const errorRes = await res.json();
          errorMessage = errorRes.message || errorRes.reason || errorMessage;
        } else {
          errorMessage = await res.text() || errorMessage;
        }
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.log("err in catch", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-4">
      <div className="minimal-card p-6 md:p-8 border border-slate-200 bg-white">
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Add New Employee</h2>
          <p className="text-xs text-slate-500 mt-1 font-light">Register a new team member entry in the database.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-xs font-medium">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
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

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-700">Email Address</label>
            <input
              type="email"
              placeholder="e.g. john.doe@company.com"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full bg-white border rounded-lg p-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 ${
                formErrors.email ? "border-red-400" : "border-slate-300"
              }`}
            />
            {formErrors.email && (
              <span className="text-red-500 text-[11px] font-medium">{formErrors.email.message}</span>
            )}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-minimal-primary py-2.5 mt-2 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Creating Entry..." : "Create Employee"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;