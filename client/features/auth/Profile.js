import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { editProfile } from "../auth/authSlice";

const Profile = () => {
  const { name, email } = useSelector((state) => state.auth.me);

  const [updateName, setUpdateName] = useState("");
  const [updateUsername, setUpdateUsername] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");

  const dispatch = useDispatch();

  const capitalizeFirst = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };

  const update = (evt) => {
    evt.preventDefault();
    dispatch(editProfile(updateName, updateUsername, updateEmail));
    setUpdateName("");
    setUpdateUsername("");
    setUpdateEmail("");
  };
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="d-flex justify-content-center mb-3">
        <h2 className="text-right" style={{ fontSize: "60px" }}>
          Welcome back, {capitalizeFirst(name)}!
        </h2>
      </div>
      <div className="row">
        <div className="col-md-5 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="200px"
              src="https://i5.walmartimages.com/asr/9730786f-fa24-4330-ac97-ed27d8cbd965.9ddfc005b61e51d2308bff4221582031.png"
            />
            <span className="font-weight-bold" style={{ fontSize: "30px" }}>
              {capitalizeFirst(name)}
            </span>
            <span className="text-black-50" style={{ fontSize: "20px" }}>
              {email}
            </span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-left">
          <form className="p-3 py-5" onSubmit={update}>
            <div className="d-flex justify-content-center mb-3">
              <h4 className="text-right" style={{ fontFamily: "merel-black" }}>
                Update Account Details
              </h4>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Username </label>
                <input
                  type="text"
                  className="form-control"
                  value={updateUsername}
                  onChange={(e) => setUpdateUsername(e.target.value)}
                />
              </div>

              <div className="col-md-12">
                <label className="labels">Email Address</label>
                <input
                  type="email"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  className="form-control"
                  value={updateEmail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                />
              </div>
              <div className=" text-center">
                <button
                  className="btn btn-dark"
                  style={{
                    fontFamily: "merel-black",
                    color: "black",
                    backgroundColor: "#F6BD60",
                  }}
                  type="submit"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
