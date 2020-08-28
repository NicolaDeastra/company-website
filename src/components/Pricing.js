import React from "react";

import { IconContext } from "react-icons/lib";

import PricingCard from "./PricingCard";
import {
  dataPricingOne,
  dataPricingTwo,
  dataPricingThree,
} from "./PricingCardData";

import "./Pricing.css";

function Pricing() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Heading</h1>
            <div className="pricing__container">
              <PricingCard {...dataPricingOne} />
              <PricingCard {...dataPricingTwo} />
              <PricingCard {...dataPricingThree} />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Pricing;
