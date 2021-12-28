import React from "react";
import backpacking from "../assets/backpacking.webp";
import cheapest from "../assets/cheapest.webp";
import vacc from "../assets/vacc.webp";
import getlost from "../assets/howtogetlost.webp";
import bestbooks from "../assets/bestbooks.webp";
import "../styles/inspirationarticles.css";

const InspirationArticles = () => {
  return (
    <>
      <h2>Need help picking a destination? Get inspiration!</h2>
      <div className="inspiration-articles">
        <div className="backpacking-container">
          <img src={backpacking} alt="backpacking" />
          <h3 className="backpacking-text">
            10 Best Adventure & Backpacking Blogs to Follow in 2022
          </h3>
        </div>
        <div className="cheapest-container">
          <img src={cheapest} alt="cheapest" />
          <h3 className="cheapest-text">
            10 Cheapest Countries to Visit in 2022
          </h3>
        </div>
        <div className="vacc-container">
          <img src={vacc} alt="vaccine safe" />
          <h3 className="vacc-text">
            27 Countries That Are Open to Vaccinated Travelers
          </h3>
        </div>
        <div className="getlost-container">
          <img src={getlost} alt="how to get lost article" />
          <h3 className="getlost-text">How to Get Lost...</h3>
        </div>
        <div className="bestbooks-container">
          <img src={bestbooks} alt="best travel books article" />
          <h3 className="bestbooks-text">
            8 Great Travel Books to Read in 2022
          </h3>
        </div>
      </div>
    </>
  );
};

export default InspirationArticles;
