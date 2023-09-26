
// import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// // import prof from "../assets/images/prof.png";

// // import { logout } from "../features/auth/authSlice";


// const UpdateForm = () => {
//   const { isError, isSuccess, isLoading, message } = useSelector(
//   (state) => state.auth
//   );

  
//   const [errors, setError] = useState({
//     name : "",
//     password: "",
//     email: "",
//     lastName: "",
//     firstName: "",
//     status :  "",
//     agentref : "",
//     url : "",
//   });
  
//   const [values, setValues] = useState({
//     // userClass: "something",
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     // navigate("/dashboard");

//     return () => {
//       dispatch(reset());
//     };
//   }, [isError]);

//   const validate = (values) => {
//     console.log(values);
//     // validation for email
//     if (!values.email) {
//       setError({ ...errors, email: "invalid email" });
//       return false;
//     };

//   return (
//     <div className="container py-3">
//       <div className="row">
//         <div className="col-6 row">
//           {/* <div className="col-sm-6">
//             <img  alt="Profile" className="rounded-circle" />
//           </div> */}
        
//         </div>
       
//       </div>
//       <div>
//         <form action="" className="py-5">
//           <div className="row">
//             <div className="col-sm-6 form-group">
//               <label htmlFor="">Fullname</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 value={name}
//                 onChange={onChange}
//               />
//             </div>
//             <div className="col-sm-6 form-group">
//               <label htmlFor="">Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 className="form-control"
//                 value={email}
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm-6 form-group">
//               <label htmlFor="">URL</label>
//               <input
//                 type="text"
//                 name="username"
//                 className="form-control"
//                 value={url}
//               />
//             </div>
//             <div className="col-sm-6 form-group">
//               <label htmlFor="">Status</label>
//               <input
//                 type="text"
//                 name="phone"
//                 className="form-control"
//                 value={status}
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm-6 form-group">
//               <label htmlFor="">Agent Ref</label>
//               <input
//                 type="text"
//                 name="phone"
//                 className="form-control"
//                 value={agentref}
//               />
//             </div>
//           </div>
//           <div className="">
//             <input type="submit" value="Update" className='btn btn-success px-4' />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// }

// export default UpdateForm;
