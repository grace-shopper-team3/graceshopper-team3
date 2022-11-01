import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = (props) => {
  const userInfo = useSelector((state) => state.auth.me);
  const userId = userInfo.id;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCart(userId));
  // }, [dispatch, userId]);

  // const cart = useSelector((state) => state.cart.cart);
  // const quantity = (arr) => {
  //   let accum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     let curr = arr[i];
  //     accum += curr.quantityInCart;
  //   }
  //   return accum;
  // };
  // console.log(quantity(cart));
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
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
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
                        style={{ height: "300px" }}
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
                        <h5 className="card-title">Gift Ideas Under 25$</h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <Link to={`/products`} state={{ homeCategory: "DC" }}>
                      <img
                        src="https://sportshub.cbsistatic.com/i/2021/03/18/f13f4020-06ec-4abe-af95-9cf56ea0c79f/funkoverse-dc-backgrounds-1220069.jpg"
                        className="card-img-top"
                        style={{ height: "300px" }}
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
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <Link to={`/products`} state={{ homeCategory: "Marvel" }}>
                      <img
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marvel-funko-pop-figures-2022-1643297204.jpg"
                        className="card-img-top"
                        style={{ height: "300px" }}
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
          </div>
        </div>
      </div>

      {/* //end */}
    </div>
  );
};

export default Home;
