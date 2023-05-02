import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);

  return (
    <div className="detail">
      <img src={sign.backgroundImg} alt={`${sign.name} background`} />
      <h2>{sign.name}</h2>
      <h4>{sign.date}</h4>
      <p>{sign.traits}</p>
      <p>Element: {sign.element}</p>
      <p>Best Match: {sign.match}</p>
    </div>
  );
};

export default Detail;
