import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const { name } = useSelector((state) => state.auth.me);
  const capitalizeAll = (str) => {
    return str?.toUpperCase();
  };

  console.log(useSelector((state) => state.auth.me));

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
                <h3 className="font-weight-bold d-block mt-4">
                  THANK YOU, {capitalizeAll(name)}!
                </h3>

                <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          <div className="py-2">
                            <span className="d-block text-muted">
                              Order Date
                            </span>
                            <span>{/* order date */}</span>
                          </div>
                        </td>

                        <td>
                          <div className="py-2">
                            <span className="d-block text-muted">Order No</span>
                            <span>{/* order no */}</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="product border-bottom table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td width="20%">
                          placeholder for item image
                          {/* <img
                            src="https://i.imgur.com/u11K1qd.jpg"
                            width="90"
                          /> */}
                        </td>

                        <td width="60%">
                          <span className="font-weight-bold">
                            placeholder for item name
                            {/* {itemName} */}
                          </span>
                          <div className="product-qty">
                            <span className="d-block">
                              Quantity:
                              {/* add quantity */}
                            </span>
                          </div>
                        </td>
                        <td width="20%">
                          <div className="text-right">
                            <span className="font-weight-bold">
                              placeholder for item subtotal
                            </span>
                          </div>
                        </td>
                      </tr>
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
                              <span>{/* {subtotal} */}</span>
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
                                {/* {subtotal + 5.99} */}
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
};
export default Checkout;
