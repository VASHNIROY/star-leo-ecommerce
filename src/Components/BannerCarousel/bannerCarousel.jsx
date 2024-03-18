import { useEffect, useState } from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Fade } from "react-awesome-reveal";
//import CustomSlider from '../Slider'; // Import CustomSlider component
// import medicine1 from "../../Utils/medicine-box1.png";
// import medicine2 from "../../Utils/medicine-box2.png";

// import cyrup1 from "../../Utils/cyrup1.png";
// import cyrup2 from "../../Utils/cyrup2.png";

import "./bannerCarousel.css";
import { useAppContext } from "../../Context";
import Loader from "../Loader/Loader";

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { bannerData } = useAppContext();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (bannerData && bannerData.length > 0) {
      setIsLoading(false);
    }
  }, [bannerData]);

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + bannerData.length) % bannerData.length;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % bannerData.length;
    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   const container = document.getElementById("carouselExampleIndicators");
  //   if (container) {
  //     container.style.backgroundColor = bannerData[activeIndex].overlayColor;
  //   }
  // }, [activeIndex, bannerData]);

  return (
    <>
      {isLoading ? (
        <Loader value={20} />
      ) : (
        <>
          <div className="banner-container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {bannerData.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === activeIndex ? "active" : ""}
                    aria-current={index === activeIndex ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <div className="carousel-inner">
                {bannerData.map((card, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <div
                      className="main-banner"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "auto",
                        backgroundPosition: "center",
                        display: "flex",

                        backgoundColor: "red",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        {/* <p className="banner-paragraph-content">{card.description}</p> */}
                        {/* <h2 className="banner-heading-content">
                    {card.category_name}
                  </h2> */}
                        {/* <button className="banner-button">
                    Buy it Now{" "}
                    <span>
                      <MdOutlineKeyboardArrowRight />
                    </span>
                  </button> */}
                      </div>
                      {/* <div className="banner-images-container">
                  <Fade direction="left">
                    <img src={card.image} alt="" className="banner-image" />
                  </Fade>
                  <Fade direction="right">
                    <img src={card.image} alt="" className="banner-image" />
                  </Fade>
                </div> */}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                onClick={handlePrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                onClick={handleNext}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Render the CustomSlider component */}
            {/* <CustomSlider /> */}
          </div>
        </>
      )}
    </>
  );
};

export default BannerCarousel;
