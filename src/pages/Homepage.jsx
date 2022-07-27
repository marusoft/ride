import React from "react";
import Benefit from "../components/Benefit";
import Product from "../components/Product";
import Subscribe from "../components/Subscribe";

const Homepage = () => {
  return (
    <div>
      <Product />
      <Benefit />
      <Subscribe />
    </div>
  );
};

export default Homepage;
