import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { processPay, fulfillOrder } from "./checkoutSlice";

const Checkout = (props) => {
  const { id, name } = useSelector((state) => state.auth.me);
  const capitalizeAll = (str) => {
    return str?.toUpperCase();
  };
  const dispatch = useDispatch();
  //const paidOrder = useSelector((state) => state.checkoutOrder.paid);

  useEffect(() => {
    dispatch(fulfillOrder());
  }, [dispatch]);

  const orderInfo = useSelector((state) => state.checkoutOrder.fulfilledOrder);
  const total = orderInfo.reduce(
    (accum, elem) => accum + elem.order_product.quantityInCart * elem.price,
    0
  );
  const date = new Date();

  if (orderInfo) {
    return (
      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="text-center logo ">
                <img
                  src="https://www.funko.com/craftmin/assets/about-freddy.png"
                  style={{ width: 270, height: 220 }}
                />
                <div className="invoice p-1">
                  <h2 className="font-weight-bold d-block mt-4">
                    THANK YOU, {capitalizeAll(name)}!
                  </h2>

                  <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td>
                            <div className="py-2">
                              <span className="d-block text-muted">
                                Order Date
                              </span>
                              <span>
                                {date.getFullYear() +
                                  "/" +
                                  (date.getMonth() + 1) +
                                  "/" +
                                  date.getDate()}
                              </span>
                            </div>
                          </td>

                          <td>
                            <div className="py-2">
                              <span className="d-block text-muted">
                                Order No
                              </span>
                              <span>{orderInfo[0]?.order_product.orderId}</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="product border-bottom table-responsive">
                    <table className="table table-borderless">
                      <tbody>
                        {orderInfo.map((elem) => (
                          <tr key={uuidv4()}>
                            <td width="20%">
                              <img
                                src={elem.imageUrl}
                                style={{ width: "60px", height: "70px" }}
                              />
                            </td>

                            <td width="60%">
                              <span style={{ fontWeight: "bold" }}>
                                {elem.name}
                              </span>

                              <span className="d-block text-muted">
                                Quantity: {elem.order_product.quantityInCart}
                              </span>
                            </td>
                            <td width="20%">
                              <div className="text-right">
                                <span className="font-weight-bold">
                                  ${" "}
                                  {elem.order_product.quantityInCart *
                                    elem.price}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="row d-flex justify-content-end">
                    <div className="col-md-5">
                      <table className="table table-borderless">
                        <tbody className="totals">
                          <tr>
                            <td>
                              <div className="text-left">
                                <span className="text-muted">Subtotal</span>
                              </div>
                            </td>
                            <td>
                              <div className="text-right">
                                <span>${total}</span>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="text-left">
                                <span className="text-muted">Shipping Fee</span>
                              </div>
                            </td>
                            <td>
                              <div className="text-right">
                                <span>$5.99</span>
                              </div>
                            </td>
                          </tr>

                          <tr className="border-top border-bottom">
                            <td>
                              <div className="text-left">
                                <span className="font-weight-bold">
                                  Order Total
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="text-right">
                                <span className="font-weight-bold">
                                  ${total + 5.99}
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <p className="font-weight-bold mb-0">
                  Thanks for shopping with us!
                </p>
                <span>
                  <img
                    style={{ width: 70, height: 40 }}
                    src="https://i.imgur.com/gxa6IWX.png"
                  />
                </span>
              </div>

              <div className="d-flex justify-content-between footer p-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div> Processing Payment</div>;
  }
};
export default Checkout;
