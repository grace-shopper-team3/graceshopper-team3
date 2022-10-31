import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfile } from "../auth/authSlice";

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
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://i5.walmartimages.com/asr/9730786f-fa24-4330-ac97-ed27d8cbd965.9ddfc005b61e51d2308bff4221582031.png"
            />
            <span className="font-weight-bold">{capitalizeFirst(name)}</span>
            <span className="text-black-50">{email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <form className="p-3 py-5" onSubmit={update}>
            <div className="d-flex justify-content-center mb-3">
              <h3 className="text-right">MY ACCOUNT</h3>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <h5 className="text-right">Profile Settings</h5>
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
            </div>

            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
