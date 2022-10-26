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
      {/* <div className="row">
        <img
          src="https://assets-prd.ignimgs.com/2022/08/16/funko-advent-calendars-2022-1660661618907.png"
          className="img-fluid"
          alt="Responsive image"
        ></img>
      </div> */}
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://assets-prd.ignimgs.com/2022/08/16/funko-advent-calendars-2022-1660661618907.png"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets-prd.ignimgs.com/2022/07/25/black-panther-funko-pops-1658775848280.png?width=1280"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets-prd.ignimgs.com/2022/04/18/thor-love-thunder-funko-pops-1650298520364.png?width=1280"
              class="d-block w-100"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
