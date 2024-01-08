import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { useClimate } from "../../context/ClimateContext";
import "./Hygrometer.css";

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [desiredHumidity, setDesiredHumidity] = useState(humidity);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (humidity < desiredHumidity) {
        setHumidity((prev) => prev + 2);
      } else if (humidity > desiredHumidity) {
        setHumidity((prev) => prev - 2);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [humidity, desiredHumidity, setHumidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {
          setDesiredHumidity(val);
        }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
