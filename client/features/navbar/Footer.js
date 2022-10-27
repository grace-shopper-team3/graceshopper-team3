import React from "react";

const Footer = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <footer className="mt-auto bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
          <section className="">
            <div className="row">
              <div className="col">
                <h5 className="text-uppercase">Account</h5>

                <ul className="list-unstyled mb-0">
                  <li>Account</li>
                  <li>Order History</li>
                </ul>
              </div>

              <div className="col">
                <h5 className="text-uppercase">Assistance</h5>

                <ul className="list-unstyled mb-0">
                  <li>Returns Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>

              <div className="col">
                <h5 className="text-uppercase">Connect With Us</h5>

                <ul className="list-unstyled mb-0">
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3">
          © 2022 Copyright: Grace Hopper Team 3
        </div>
      </footer>
    </div>
  );
};
export default Footer;
