import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  // const username = useSelector((state) => state.auth.me.username);

  // return (
  //   <div>
  //     <h3>Welcome, {username}</h3>
  //   </div>
  // );
  return (
    <div className="container-fluid">
      <div className="row">
        <img
          src="https://assets-prd.ignimgs.com/2022/08/16/funko-advent-calendars-2022-1660661618907.png"
          className="img-fluid"
          alt="Responsive image"
        ></img>
      </div>

      <div className="container text-center">
        <div className="row g-3">
          <div className="col-6">
            <div className="bundle">DC Universe</div>
          </div>
          <div className="col-6">
            <div className="bundle">Marvel</div>
          </div>
          <div className="col-6">
            <div className="bundle">Disney</div>
          </div>
          <div className="col-6">
            <div className="bundle">Pokemon</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px" }}></div>
    </div>
  );
};

export default Home;
