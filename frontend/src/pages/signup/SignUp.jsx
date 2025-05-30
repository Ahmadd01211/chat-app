import GenderCheckbox from "./GenderCheckbox";

const signUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form >

          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Muhammad Ahmad" className="w-full input input-borderd h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input type="text" placeholder="MA0121" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="Password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="Password" placeholder="Confirm Password" className="w-full mb-2 input input-bordered h-10"/>
          </div>

          <GenderCheckbox/>

          <a className=" text-sm hover:text-blue-600 mt-2 inline-block"
          href="#"> Already have an account?</a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</button>
          </div>
         

        </form>
      </div>
    </div>
  )
}

export default signUp;



// const signUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form >

//           <div>
//             <label className="label p-2">
//               <span className=" text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="Muhammad Ahmad" className="w-full input input-borderd h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">UserName</span>
//             </label>
//             <input type="text" placeholder="MA0121" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="Password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="Password" placeholder="Confirm Password" className="w-full mb-2 input input-bordered h-10"/>
//           </div>

//           <GenderCheckbox/>

//           <a className=" text-sm hover:text-blue-600 mt-2 inline-block"
//           href="#"> Already have an account?</a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</button>
//           </div>
         

//         </form>
//       </div>
//     </div>
//   )
// }

// export default signUp;