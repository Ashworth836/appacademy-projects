import React from "react";
import CoffeeProvider from "./context/CoffeeContext";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import SetCoffeeBean from "./components/SetCoffeeBean";
import coffeeBeans from "./mockData/coffeeBeans.json";

function App() {
  return (
    <CoffeeProvider>
      <div>
        <h1>Welcome to Coffee App</h1>
        <SelectedCoffeeBean />
        <SetCoffeeBean coffeeBeans={coffeeBeans} />
      </div>
    </CoffeeProvider>
  );
}

export default App;
