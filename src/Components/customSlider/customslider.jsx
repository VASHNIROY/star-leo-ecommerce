import { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdBiotech, MdMilitaryTech } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { DiTechcrunch } from "react-icons/di";
import { FcBiotech } from "react-icons/fc";
import { GrTechnology } from "react-icons/gr";
import {
  SiArstechnica,
  SiKingstontechnology,
  SiAudiotechnica,
} from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customslider.css";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const slides = [
  { image: <MdBiotech size={64} />, name: "Nagesh" },
  { image: <MdMilitaryTech size={64} />, name: "Nagesh" },
  { image: <GiTechnoHeart size={64} />, name: "Nagesh" },
  { image: <DiTechcrunch size={64} />, name: "Nagesh" },
  { image: <GrTechnology size={64} />, name: "Nagesh" },
  { image: <SiArstechnica size={64} />, name: "Nagesh" },
  { image: <SiKingstontechnology size={64} />, name: "Nagesh" },
  { image: <SiAudiotechnica size={64} />, name: "Nagesh" },
  { image: <DiTechcrunch size={64} />, name: "Nagesh" },
  { image: <FcBiotech size={64} />, name: "Nagesh" },
  { image: <GrTechnology size={64} />, name: "Nagesh" },
];

function CustomSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const { brandList } = useAppContext();

  const navigate = useNavigate();

  const settings = {
    dots: false,
    prevArrow: (
      <IoIosArrowBack
        size="40"
        color={isHovered ? "#fff" : "black"}
        className="custom-prev-arrow"
        style={{ transition: "color 0.3s ease" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    ),
    nextArrow: (
      <IoIosArrowForward
        size="40"
        color={isHovered ? "#fff" : "black"}
        className="custom-prev-arrow"
        style={{ transition: "color 0.3s ease" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    ),

    speed: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="slider-main-container">
      <div className="slider-container-2">
        <Slider {...settings}>
          {brandList.map((slide) => (
            <div
              key={slide.brand_id}
              className="brand-icon-content-container"
              onClick={() => navigate(`/productslist/${slide.brand_id}`)}
            >
              <div className="icon-slider">
                <img className="brand-image" src={slide.brand_logo} />
              </div>
              <p className="brand-name">{slide.brand_name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomSlider;
