import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import bannerimage from "../../Utils/banner2.png";
import "./advertBanner.css";

const AdvertBanner = () => {
  return (
    <div className="advertising-main-container">
      <div className="advertising-banner-container">
        <div>
          <img
            src={bannerimage}
            alt="advertise hear"
            className="image-transition"
          />
        </div>
        <div>
          <p className="adve-promo-heading">Newest Products</p>
          <p className="adve-heading" style={{ fontSize: "18px" }}>
            Save unto 10% extra enjoy{" "}
            <span className="adve-span-element">FREE</span> delivery with{" "}
            <span className="adve-span-element">PLUS</span> membership
          </p>
          <button className="adve-button">
            Show Now
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertBanner;
