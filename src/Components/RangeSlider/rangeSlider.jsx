import { useState } from "react";
import Slider from "react-slider";
import "./rangeSlider.css";

const PriceSlider = () => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        width: "300px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Slider
        className="slider pb-3 mb-3"
        value={values}
        onChange={handleChange}
        min={0}
        max={100}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            className="slider-input"
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div>
          <input
            className="slider-input"
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
