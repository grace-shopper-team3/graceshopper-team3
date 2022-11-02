import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = (props) => {
  const styles = {
    card: {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    },
  };

  return (
    <div className="container-fluid">
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ytimg.com/vi/FDEtkcYZjRk/maxresdefault.jpg"
              className=" w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.alphacoders.com/888/888417.jpg"
              className=" w-100"
            />
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/yUm4b0G.png" className=" w-100" />
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

      <div
        className="row justify-content-md-center"
        style={{ paddingBottom: "20px" }}
      >
        <div className="col-md">
          <div className="card" style={styles.card}>
            <Link
              to={`/products`}
              state={{ homePrice: 25 }}
              style={{
                fontFamily: "merel-black",
                color: "black",
              }}
            >
              <img
                src="https://popgeekcollectibles.com/wp-content/uploads/2020/10/Funko_Pop_Banner_Image-1.jpg"
                className="card-img-top"
                style={{ height: "300px", width: "450px" }}
              />{" "}
            </Link>

            <div className="card-body">
              <Link
                to={`/products`}
                state={{ homePrice: 25 }}
                style={{
                  fontFamily: "merel-black",
                  color: "black",
                  backgroundColor: "#F6BD60",
                }}
                className="btn btn-dark"
              >
                <h5 className="card-title ">Gift Ideas Under $25</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card" style={styles.card}>
            <Link to={`/products`} state={{ homeCategory: "DC" }}>
              <img
                src="https://sportshub.cbsistatic.com/i/2021/03/18/f13f4020-06ec-4abe-af95-9cf56ea0c79f/funkoverse-dc-backgrounds-1220069.jpg"
                className="card-img-top"
                style={{ height: "300px", width: "450px" }}
              />{" "}
            </Link>

            <div className="card-body">
              <Link
                className="btn btn-dark"
                to={`/products`}
                state={{ homeCategory: "DC" }}
                style={{
                  fontFamily: "merel-black",
                  color: "black",
                  backgroundColor: "#F6BD60",
                }}
              >
                <h5 className="card-title">Shop DC Universe</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card" style={styles.card}>
            <Link to={`/products`} state={{ homeCategory: "Marvel" }}>
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marvel-funko-pop-figures-2022-1643297204.jpg"
                className="card-img-top"
                style={{ height: "300px", width: "450px" }}
              />{" "}
            </Link>
            <div className="card-body">
              <Link
                to={`/products`}
                state={{ homeCategory: "Marvel" }}
                style={{
                  fontFamily: "merel-black",
                  color: "black",
                  backgroundColor: "#F6BD60",
                }}
                className="btn btn-dark"
              >
                <h5 className="card-title">Shop Marvel</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
