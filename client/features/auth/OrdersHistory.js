import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getOrdersHistory } from "./historySlice";

const OrdersHistory = (props) => {
  const { id, name } = useSelector((state) => state.auth.me);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersHistory());
  }, [dispatch]);

  const allOrders = useSelector((state) => state.ordersHistory.allOrders);

  if (allOrders.length) {
    return (
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="d-flex justify-content-center mb-3">
          <h2 className="text-right" style={{ fontSize: "40px" }}>
            Orders
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
                Welcome {name[0].toUpperCase() + name.slice(1)}
              </span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-left">
            <div className="d-flex justify-content-center mb-3"></div>

            <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Order Date</span>
                      </div>
                    </td>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Order Total</span>
                      </div>
                    </td>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Items</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product border-bottom table-responsive">
              <table className="table table-borderless">
                <tbody>
                  {allOrders.map((order) => (
                    <tr
                      key={uuidv4()}
                      className="product border-bottom table-responsive"
                    >
                      <td className="py-2">
                        {order[0]?.order_product.updatedAt.slice(0, 10)}
                      </td>
                      <td className="py-2">
                        <div className="text-right">
                          <span className="font-weight-bold">
                            ${" "}
                            {order
                              .reduce(
                                (accum, product) =>
                                  accum +
                                  product.price *
                                    product.order_product.quantityInCart,
                                5.99
                              )
                              .toFixed(2)}
                          </span>
                        </div>
                      </td>
                      <td className="py-2">
                        {order.map((product) => (
                          <div key={uuidv4()}>
                            <img
                              src={product.imageUrl}
                              style={{ width: "60px", height: "70px" }}
                            />
                            <span className="d-block text-muted">
                              {product.order_product.quantityInCart}
                            </span>
                            <span style={{ fontWeight: "bold" }}>
                              {product.name}
                            </span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row">
              <div className="col-md-12">
                <div className="card-body cart">
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <img
                      src="https://i.imgur.com/OgIZ3P3.png"
                      width="330"
                      height="330"
                      className="img-fluid mb-4 mr-3"
                    />
                    <h3>
                      <strong>You don't have any orders!</strong>
                    </h3>

                    <Link
                      to="/products"
                      className="btn btn-dark cart-btn-transform m-3"
                      data-abc="true"
                      style={{
                        fontFamily: "merel-black",
                        color: "black",
                        backgroundColor: "#F6BD60",
                      }}
                    >
                      Start Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
export default OrdersHistory;
