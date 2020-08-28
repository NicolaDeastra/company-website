import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

import "./PricingCard.css";

function PricingCard({ icon, content, feature, btnColor }) {
  return (
    <>
      <Link to="sign-up" className="pricing__container-card">
        <div className="pricing__container-cardInfo">
          <div className="icon">{icon}</div>
          <h3>{content.title}</h3>
          <h4>{content.price}</h4>
          <p>per month</p>
          <ul className="pricing__container-features">
            <li>{feature.transaction} Transaction</li>
            <li>{feature.cashBack} Cash Back</li>
            <li>{feature.limit} Limit</li>
          </ul>
          <Button buttonSize="btn--wide" buttonColor={btnColor}>
            Choose Plan
          </Button>
        </div>
      </Link>
    </>
  );
}

export default PricingCard;
