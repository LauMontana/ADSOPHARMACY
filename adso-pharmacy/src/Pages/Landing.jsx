import React from "react";
import promo from "../media/promo.png";
import safety from "../media/safety.png";
import tab from "../media/tab.png";
import Header from "./Header";
import Footer from "./Footer";
import "./slider.css";

function Landing() {
  return (
    <div> 
      <Header />
      <section class="slide-novedades" id="slider-novedades">

        <ul class="slider-cont-nov">
            <li id="slide1"><img src={promo}/></li>
            <li id="slide2"><img src={safety} /></li>
            <li id="slide3"><img src={tab}/></li>
        </ul>

        <ul class="menu-slider-nov">
            <li><a href="#slide1">1</a></li>
            <li><a href="#slide2">2</a></li>
            <li><a href="#slide3">3</a></li>

        </ul>

    </section>
    <Footer />
    
    </div>
  );
}

export default Landing;
