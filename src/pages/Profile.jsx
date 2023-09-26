import React from "react";
import prof from "../assets/images/prof.png";
import { useState } from "react";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("a@gmail.com");
  const [username, setUsername] = useState("@username");
  const [phone, setPhone] = useState("08080808080");

  const dispatch = useDispatch();
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-6 row">
          <div className="col-sm-6">
            <img src={prof} alt="Profile" className="rounded-circle" />
          </div>
          <div className="col-sm-6">
            <h5>{name}</h5>
            <p className="text-success">{username}</p>
            <p>24F6H45</p>
          </div>
        </div>
        <div className="col-6 row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3"></div>
          <div className="col-sm-3"></div>
          <div className="col-sm-3">
            <div className="py-3 px-3 rounded-top bg-success text-light text-center">
              Verified
            </div>

            <div
              className="py-3 my-5 px-3 rounded-top bg-danger text-light text-center"
              onClick={() => dispatch(logout())}
            >
              logout
            </div>
          </div>
        </div>
      </div>
      <div>
        <form action="" className="py-5">
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="">Fullname</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={email}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={username}
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={phone}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
