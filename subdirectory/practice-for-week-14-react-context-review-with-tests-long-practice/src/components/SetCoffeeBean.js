import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { coffeeBean, setCoffeeBeanId } = useContext(CoffeeContext);

  const handleChange = (e) => {
    setCoffeeBeanId(e.target.value);
  };

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select name="coffee-bean" value={coffeeBean.id} onChange={handleChange}>
        {coffeeBeans.map((bean) => (
          <option key={bean.id} value={bean.id}>
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SetCoffeeBean;
