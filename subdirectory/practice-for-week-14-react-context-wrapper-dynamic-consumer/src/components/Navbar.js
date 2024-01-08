import { useContext } from "react";
import horoscopesObj from "../data/horoscopes";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);

  const { setCurrentSign } = useContext(HoroscopeContext);
  console.log("Navbar component is rendering.");

  const handleClick = (sign) => {
    setCurrentSign(sign);
  };

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign}>{sign}</span>
      ))}
      <span onClick={() => handleClick("aries")}>Aries</span>
      <span onClick={() => handleClick("taurus")}>Taurus</span>
      <span onClick={() => handleClick("gemini")}>Gemini</span>
      <span onClick={() => handleClick("cancer")}>Cancer</span>
      <span onClick={() => handleClick("leo")}>Leo</span>
    </nav>
  );
};

export default Navbar;
