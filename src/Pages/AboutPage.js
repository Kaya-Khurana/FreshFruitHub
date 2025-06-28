import React from "react";
import Testimonial from "../Componets/Testimonial";

const AboutPage = () => {
  return (
    <>
      <div class="container-fluid bg-dark">
        <div
          class="container text-center align-content-center About-part pt-5"
          style={{ height: "35vh" }}
        >
          <p style={{ color: "orange" }}>WE SALE FRESH FRUITS</p>
          <h2>About</h2>
        </div>
      </div>
      <div class="container mt-5 d-flex">
        <div class="row">
          <div class="col-lg-6 col-md-6 mb-4 mb-md-5 align-content-center justify-content-center">
            <div class="list-box d-flex">
              <div class="list-icon p-4">
                <i class="fas fa-shipping-fast"></i>
              </div>
              <div class="content">
                <h3>Home Delivery</h3>
                <p>
                  Get your first order delivered right to your doorstep - on us!
                  Enjoy FREE home delivery on your first purchase. No minimum
                  order required, just shop and save
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
            <div class="list-box d-flex">
              <div class="list-icon p-4">
                <i class="fas fa-money-bill-alt"></i>
              </div>
              <div class="content">
                <h3>Best Price</h3>
                <p>
                  Experience the best prices guaranteed! We offer the most
                  competitive prices online, ensuring you get the best value for
                  your money. Shop with us and enjoy unbeatable prices on your
                  favorite products!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
            <div class="list-box d-flex">
              <div class="list-icon p-4">
                <i class="fas fa-briefcase"></i>
              </div>
              <div class="content">
                <h3>Custom Box</h3>
                <p>
                  Make it personal with our custom box option! Choose from a
                  variety of designs and make your gift or purchase even more
                  special. Add a personal touch to your order today!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="list-box d-flex">
              <div class="list-icon p-4">
                <i class="fas fa-sync-alt"></i>
              </div>
              <div class="content">
                <h3>Quick Refund</h3>
                <p>
                  Shop with confidence! If you're not satisfied, we've got you
                  covered. Our quick refund policy ensures you get your money
                  back fast, no questions asked. Hassle-free returns,
                  guaranteed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
};
export default AboutPage;
