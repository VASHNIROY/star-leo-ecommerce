import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BasicCard from "../BasicCard/basiccard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredproducts.css";
import { useAppContext } from "../../Context/index.jsx";
import Loader from "../Loader/Loader.jsx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", right: 0 }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", left: 0 }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default function FeaturedProducts() {
  const slider = React.useRef(null);

  const { featuredProductsList, FetchFeaturedProductsdata } = useAppContext();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (featuredProductsList && featuredProductsList.length > 0) {
      setIsLoading(false);
    }
  }, [featuredProductsList]);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 2,

    responsive: [
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          rows: 2,
          slidePerRow: 1,
        },
      },

      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const clickedAddWish = async () => {
    await FetchFeaturedProductsdata();
    console.log("fetured products called ");
    console.log(featuredProductsList, "new list ");
  };

  return (
    <>
      <h1 className="product-curosal-heading">Featured Products</h1>
      {isLoading ? (
        <Loader value={40} />
      ) : (
        <>
          <div style={{ width: "100%", padding: "0 9% 0 9%" }}>
            <div className="feature-curosal-arrow-button">
              <button
                className="feature-curosal-arrow-right"
                onClick={() => slider?.current?.slickPrev()}
              >
                <IoIosArrowBack className="feature-curosal-arrow" />
              </button>
              <button
                style={{ marginLeft: 10 }}
                className="feature-curosal-arrow-right"
                onClick={() => slider?.current?.slickNext()}
              >
                <IoIosArrowForward className="feature-curosal-arrow" />
              </button>
            </div>
            <Slider ref={slider} {...settings}>
              {featuredProductsList.map((item) => (
                <BasicCard
                  item={item}
                  key={item.id}
                  addWishClicked={clickedAddWish}
                />
              ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
}
