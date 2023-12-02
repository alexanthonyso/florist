import React, { useEffect } from "react";
import "../styles/main.css";
import Main from "../assets/img/main.png";
import flow1 from "../assets/img/flower1.png";
import flow2 from "../assets/img/flower2.png";
import flow3 from "../assets/img/flower3.png";
import "../styles/pages/home.css";
import Contact from "../components/Contact";
import flower from "../assets/logo/flower.svg";
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
      </main>

      <Contact />
    </div>
  );
}

export default Home;
