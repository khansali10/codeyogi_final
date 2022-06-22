import React from "react";
import { useFormik } from "formik";

function Profile({ myData }) {
  //submit profile form
  const submitProfileForm = (event) => {
    //code for submitting profile form
    event.preventDefault();
    console.log("submitProfileForm called ");
    // console.log("initialValuesss ", initialValues);
    console.log("valuesss ", values);
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: myData,
    submitProfileForm,
  });
  //destructuring values object which is got from useFormik
  const {
    first_name,
    last_name,
    email,
    institute_roll_no,
    phone_no,
    date_of_birth,
    institute,
    work_device,
    year_of_pass_out,
    branch,
  } = myData;
  //have not correct date yet
  // const new_birth_date = DateTime.fromISO(date_of_birth).toFormat("dd-LL-yyyy");
  const lableClassName = "text-sm font-semibold text-slate-500";

  return (
    <>
      <div className=" flex-col bg-white divide-y py-2 px-4	 rounded-md">
        <h3 className="font-semibold text-lg p-3">Personal details</h3>
        <form onSubmit={handleSubmit}>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="first_name">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={first_name}
              onChange={handleChange}
              id="first_name"
              name="first_name"
              placeholder="first name"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            ></input>
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="last_name">
              Last Name
              <span className="text-red-500 block">
                (Skip only if you don't have it in official documents)
              </span>
            </label>
            <input
              type="text"
              value={last_name}
              onChange={handleChange}
              id="last_name"
              name="last_name"
              placeholder="last name"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              id="email"
              name="email"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="institute_name">
              Institute Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={institute.name}
              onChange={handleChange}
              id="institute_name"
              name="institute_name"
              required
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="year_of_pass_out">
              Year Of Passout
            </label>
            <input
              type="text"
              value={year_of_pass_out}
              onChange={handleChange}
              id="year_of_pass_out"
              name="year_of_pass_out"
              placeholder="YYYY"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="phone_no">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={phone_no}
              onChange={handleChange}
              required
              id="phone_no"
              name="phone_no"
              placeholder="mobile"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          {/* <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="">
              Date Of Birth<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={new_birth_date}
              onChange={handleChange}
              id="date_of_birth"
              name="date_of_birth"
              required
              placeholder="dd/mm/yyyy"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div> */}
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="work_device">
              Device you are using to do your assignments
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={work_device}
              onChange={handleChange}
              id="work_device"
              name="work_device"
              className="w-4/6 rounded-md  p-3 border border-slate-300"
            >
              <option>Mobile without Computer</option>
              <option>Mobile with Keyboard</option>
              <option>College Computer/Laptop</option>
              <option>Personal Computer/Laptop</option>
            </select>
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="institute_roll_no">
              Institute roll no.
            </label>
            <input
              type="text"
              value={institute_roll_no}
              onChange={handleChange}
              id="institute_roll_no"
              name="institute_roll_no"
              placeholder="roll number"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="p-7 flex justify-between items-center">
            <label className={lableClassName} htmlFor="branch">
              Branch
            </label>
            <input
              type="text"
              value={branch}
              onChange={handleChange}
              id="branch"
              name="branch"
              placeholder="e.g. IT"
              className="w-4/6 rounded-md p-3 bg-slate-50 border border-slate-300"
            />
          </div>
          <div className="py-6 flex justify-between items-center">
            <button
              type="submit"
              onClick={handleSubmit}
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
