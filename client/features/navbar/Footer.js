import React from "react";

const Footer = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50"> */}
      {/* <footer className="mt-auto bg-dark text-center text-white fixed-bottom"> */}
      <footer className="mt-auto bg-dark text-center text-white ">
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
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>Link 1</li>
                  <li>Link 2</li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>Link 1</li>
                  <li>Link 2</li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>Link 1</li>
                  <li>Link 2</li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>Link 1</li>
                  <li>Link 2</li>
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
