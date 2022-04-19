import React from "react";

function Profile() {
  return (
    <>
      <div className=" flex-col bg-white divide-y py-2 px-4	 rounded-md">
        <h3 className="font-semibold text-lg p-3">Personal details</h3>
        <form>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="first name"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            ></input>
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500 ">
              Last Name
              <span className="text-red-500 block">
                (Skip only if you don't have it in official documents)
              </span>
            </label>
            <input
              type="text"
              placeholder="last name"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Email address
            </label>
            <input
              type="email"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Institute Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Year Of Passout
            </label>
            <input
              type="text"
              placeholder="YYYY"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="mobile"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Date Of Birth<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              placeholder="dd/mm/yyyy"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Device you are using to do your assignments
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            >
              <option selected>Mobile without Computer</option>
              <option>Mobile with Keyboard</option>
              <option>College Computer/Laptop</option>
              <option>Personal Computer/Laptop</option>
            </select>
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Institute roll no.
            </label>
            <input
              type="text"
              placeholder="roll number"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-500">
              Branch
            </label>
            <input
              type="text"
              placeholder="e.g. IT"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="py-6 flex justify-between items-center">
            <button
              type="submit"
              className="py-2 px-8 bg-indigo-600 text-white font-semibold rounded-md "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Profile;
