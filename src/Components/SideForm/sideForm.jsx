import { useState, useEffect } from "react";
import PriceSlider from "../RangeSlider/rangeSlider";
import "./sideForm.css";

const SideForm = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [showForm, setShowForm] = useState(false);
  const [selectedQueryparams, setSelectedQueryparams] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedForms, setSelectedForms] = useState([]);
  const [selectedFrequencies, setSelectedFrequencies] = useState([]);

  const handleConditionSelect = (condition) => {
    setSelectedQueryparams((prevState) => [...prevState, condition]);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrands((prevState) => [...prevState, brand]);
  };

  const handleFormSelect = (form) => {
    setSelectedForms((prevState) => [...prevState, form]);
  };

  const handleFrequencySelect = (frequency) => {
    setSelectedFrequencies((prevState) => [...prevState, frequency]);
  };

  const conditionArray = [
    "Acidre flux",
    "Anxiety",
    "Cold",
    "Covid 19",
    "Depression",
    "Diabetes",
    "Hairloss",
    "High cholesterol",
    "Inflammation",
    "Viral infection",
  ];

  const brandsArray = ["optimize", "Amere", "Allisa", "Jurosa"];
  const formTypeArray = ["Oral suspension", "oral granuels", "Liquid"];
  const frequencyArray = ["Individual"];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div
      className={`sidebar ${isSmallScreen ? "small-screen" : ""}`}
      style={{ padding: "20px" }}
    >
      <form style={{ display: showForm ? "block" : "" }}>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={closeForm}
            style={{
              height: "45px",
              border: "none",
              outline: "none",
              width: "70px",
              padding: "5px",
              background: "red",
              color: "#ffffff",
              borderRadius: "8px",
            }}
            className="close-form-button"
          >
            Close
          </button>
        </div>
        <h3
          style={{ color: "#3632a8", marginTop: "20px", marginBottom: "20px" }}
        >
          Shop By Categories
        </h3>
        <button
          href="#"
          style={{
            textDecoration: "none",
            padding: "5px",
            color: "#ffffff",
            background: "green",
            margin: "10px",
            border: "none",
            outline: "none",
            borderRadius: "8px",
            height: "45px",
           
            width: "70px",
          }}
        >
          clear
        </button>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              textAlign: "left",
              color: "#3632a8",
              margin: "10px",
              fontSize: "30px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Price
          </label>
          <PriceSlider />
        </div>
        <div>
          <h3
            style={{
              color: "#3632a8",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Brand
          </h3>
          <div>
            {brandsArray.map((brand, index) => (
              <div key={index}>
                <label style={{ fontSize: "25px" }}>
                  <input
                    type="checkbox"
                    value={brand}
                    style={{ transform: "scale(1.5)", marginRight: "5px" }}
                    onChange={(e) => handleBrandSelect(e.target.value)}
                  />
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3
            style={{
              color: "#3632a8",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Condition
          </h3>
          <div className="conditions-arrey-container">
            {conditionArray.map((condition, index) => (
              <button
                key={index}
                onClick={() => handleConditionSelect(condition)}
                style={{ fontSize: "16px", margin: "5px", display: "block" }}
                className="conditions-button"
              >
                {condition}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3
            style={{
              color: "#3632a8",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Form
          </h3>
          <div>
            {formTypeArray.map((form, index) => (
              <div key={index}>
                <label style={{ fontSize: "25px" }}>
                  <input
                    type="checkbox"
                    value={form}
                    style={{ transform: "scale(1.5)", marginRight: "5px" }}
                    onChange={(e) => handleFormSelect(e.target.value)}
                  />
                  {form}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              color: "#3632a8",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            Milliliters
          </h3>
          <PriceSlider />
        </div>
        <div>
          <h3
            style={{
              color: "#3632a8",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Frequency
          </h3>
          <div>
            {frequencyArray.map((frequency, index) => (
              <div key={index}>
                <label style={{ fontSize: "25px" }}>
                  <input
                    type="checkbox"
                    value={frequency}
                    style={{ transform: "scale(1.5)", marginRight: "5px" }}
                    onChange={(e) => handleFrequencySelect(e.target.value)}
                  />
                  {frequency}
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
      {isSmallScreen && !showForm && (
        <button onClick={toggleForm} className="open-form-button">
          Open Form
        </button>
      )}
    </div>
  );
};

export default SideForm;
