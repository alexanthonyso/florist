import React, { useEffect } from "react";
import "../styles/main.css";
import Main from "../assets/img/main.png";
import flow1 from "../assets/img/flower1.png";
import flow2 from "../assets/img/flower2.png";
import flow3 from "../assets/img/flower3.png";
import "../styles/pages/home.css";
import Contact from "../components/Contact";
import flower from "../assets/logo/flower.svg";
import Phone from "../assets/logo/Phone.svg";
import Delevery from "../assets/logo/Delevery.svg";
import Store from "../assets/logo/Store.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <main>
        <div className="section">
          <div className="container-title">
            <h1>Moonflower</h1>
            <h2>FLOWER SHOP</h2>
          </div>
        </div>

        <img className="flower-main" src={Main} alt="flower" />
        <section className="section1">
          <h3>ABOUT US</h3>

          <p data-aos="fade-up" data-aos-duration="3000">
            Welcome to our world of floral elegance. Each bloom at our shop is a
            symbol of sophistication and timeless beauty. From sumptuous
            bouquets to custom creations, our skilled artisans craft
            unforgettable visual experiences. Whether celebrating love,
            friendship, or success, our luxury flowers express sentiments with
            unmatched artistry. Quality and exceptional service define us, from
            flower selection to punctual delivery. Explore our refined
            collection for a sensory experience and share the timeless beauty of
            nature.
          </p>
        </section>
        <section className="section2">
          <div className="title-container">
            <h4>PRODUCTS</h4>
            <img className="flowersvg" src={flower} alt="Icône" />
          </div>
          <div className="container-flowers">
            <img
              className="flower-1"
              src={flow1}
              alt="flower"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <img
              className="flower-2"
              src={flow2}
              alt="flower"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="100"
            />
            <img
              className="flower-3"
              src={flow3}
              alt="flower"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="200"
            />
          </div>
        </section>
        <section className="section3">
          <h4>SERVICES</h4>
          <div className="allinfoservice">
            <div className="infoservice">
              <img className="Phone" src={Phone} alt="Icône" />
              <h5>Order by phone</h5>
              <p>
                To place an order, call us at [Phone Number]. Our expert
                florists will be delighted to discuss your preferences and help
                you create the perfect bouquet.
              </p>
            </div>
            <div className="infoservice2">
              <img className="Store" src={Store} alt="Icône" />
              <h5>Visit Our Store </h5>
              <p>
                We encourage our customers to come directly to our store to
                experience the floral magic in person. Explore our selection,
                savor the enchanting aromas, and choose the bouquet that speaks
                to you.
              </p>
            </div>
            <div className="infoservice3">
              <img className="Delevery" src={Delevery} alt="Icône" />
              <h5>Delivery Not Available </h5>
              <p>
                Currently, we do not offer a delivery service. However, we
                believe that the magic of flowers is best appreciated in person,
                and we look forward to warmly welcoming you to our store.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
