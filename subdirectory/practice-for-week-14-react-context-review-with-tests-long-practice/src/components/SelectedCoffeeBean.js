import React, { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const { coffeeBean } = useContext(CoffeeContext);

  return (
    <div className="selected-coffee">
      <h2>Current Selection: {coffeeBean.name}</h2>
    </div>
  );
};

export default SelectedCoffeeBean;
