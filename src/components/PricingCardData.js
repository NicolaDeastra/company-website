import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";

export const dataPricingOne = {
  icon: FaFire,
  content: {
    title: "Starter",
    price: "$8.99",
  },
  feature: {
    transaction: "100",
    cashBack: "2%",
    limit: "$10.000",
  },
  btnColor: "primary",
};

export const dataPricingTwo = {
  icon: BsXDiamondFill,
  content: {
    title: "Gold",
    price: "$29.99",
  },
  feature: {
    transaction: "100",
    cashBack: "3.5%",
    limit: "$10.000",
  },
  btnColor: "blue",
};

export const dataPricingThree = {
  icon: GiCrystalize,
  content: {
    title: "Diamond",
    price: "$99.99",
  },
  feature: {
    transaction: "Unlimited",
    cashBack: "5%",
    limit: "Unlimited",
  },
  btnColor: "primary",
};
