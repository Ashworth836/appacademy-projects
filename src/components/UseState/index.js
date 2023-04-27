import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const themeSwitch = () => {
    const btnElement = document.querySelector("button");
    if (theme === "light") {
      btnElement.innerText = "light";
      return setTheme("dark");
    }
    btnElement.innerText = "dark";
    return setTheme("light");
  };

  return (
    <div className={` ${theme} state `}>
      <h1>UseState Component</h1>
      <button onClick={themeSwitch}>Dark</button>
      <h1> {count} </h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
