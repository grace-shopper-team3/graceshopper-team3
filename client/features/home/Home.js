import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const Home = (props) => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets-prd.ignimgs.com/2022/08/16/funko-advent-calendars-2022-1660661618907.png"
              className=" w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-prd.ignimgs.com/2022/07/25/black-panther-funko-pops-1658775848280.png?width=1280"
              className=" w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-prd.ignimgs.com/2022/04/18/thor-love-thunder-funko-pops-1650298520364.png?width=1280"
              className=" w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* start */}
      <div
        id="carouselMultiItemExample"
        className="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner py-4">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                      className="card-img-top"
                      alt="Waterfall"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Shop DC Universe</h5>

                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                      className="card-img-top"
                      alt="Sunset Over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Shop Marvel</h5>

                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                      className="card-img-top"
                      alt="Sunset over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Gift Ideas Under 25$</h5>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //end */}
      <div className="container text-center" style={{ paddingBottom: "10px" }}>
        <div className="row g-3">
          <div className="col-6">
            <Link
              to={`/products`}
              state={{ homeCategory: "DC" }}
              style={{ textDecoration: `none`, color: `blue` }}
            >
              <div className="bundle">DC Universe</div>
            </Link>
          </div>
          <div className="col-6">
            <Link
              to={`/products`}
              state={{ homeCategory: "Marvel" }}
              style={{ textDecoration: `none`, color: `blue` }}
            >
              <div className="bundle">Marvel</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
