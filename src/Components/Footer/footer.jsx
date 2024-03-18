import "./footer.css";
import { useMediaQuery } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../Utils/logo.png";

const Footer = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1250px)");
  const navigate = useNavigate();
  return (
    <div
      className={`${
        isMobileScreen ? "mbl-footer-main-contaier" : "footer-main-contaier"
      }`}
    >
      <div className="footer-address-help-container">
        <div className="footer-address-container">
          <div
            className="mbl-navbar-logo mbl-footer-logo"
            onClick={() => navigate("/")}
          >
            <Link to="/">
              <img src={logo} className="navbar-logo" />
            </Link>
            <div className="navbar-logo-content-container">
              <p style={{ margin: 0 }}>Bachat Guruu</p>
              <p style={{ margin: 0 }}>ISSE SASTA AUR KAHAN</p>
            </div>
          </div>
          <div className="">
            <p>70 Washington Square South,</p>
            <p>New York, NY 10012, United States</p>
          </div>
          <div className="footer-social-icons-container">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <hr className="footer-hr-line" />
        <div className="footer-help-main-container">
          <div className="footer-vertical-line"></div>

          <div className="footer-help-container">
            <p className="footer-side-headings">Need help</p>
            <h5
              className="footer-side-headings"
              style={{
                fontWeight: "bold",
                marginTop: "6%",
                marginBottom: "10%",
              }}
            >
              9876 788 - HGGGY -888
            </h5>
            <span>Monday - Friday: 9:00 - 20:00</span>
            <p>Saturday: 9:00 - 15:00</p>
            <div className="footer-mail-contianer">
              <CiMail />
              <p style={{ margin: 0, marginLeft: "10px" }}>
                inbox@ecommerce.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-info-acc-hr-line" />
      <div className="footer-info-acc-container">
        <div className="footer-info-acc-mini-container">
          <p className="footer-side-headings">Information</p>
          <ul className="footer-info-acc-ul-container">
            <li
              className="footer-route-link"
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Sales</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-info-acc-mini-container">
          <p className="footer-side-headings">Account</p>
          <ul className="footer-info-acc-ul-container">
            <li>Dashboard</li>
            <li onClick={() => navigate("/orderlist")}>My Orders</li>
            <li>Account Details</li>
            <li>Returns</li>
            <li onClick={() => navigate("/wishlist")}>Wishlist</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
