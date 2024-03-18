import { FaSquarePhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import "./contactus.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {

  return (
    <div className="contact-us-main-container">
      <div className="contact-us-display-container">
        <div className="contact-us-form-details-container">
          <div className="contact-us-form-main-container">
            <h2 className="contact-us-heading">Message</h2>
            <p className="contact-us-para">
              Got any problems with purchase? Wanna ask for a piece of advice or
              leave a suggestion? Don’t hesitate and write to our Email!
            </p>
            <form className="contact-us-form-container">
              <div className="contact-us-input-container">
                <label className="contact-us-label">Your Name</label>
                <input
                  placeholder="Enter your name "
                  className="contact-us-input"
                  type="text"
                />
              </div>
              <div className="contact-us-input-container">
                <label className="contact-us-label">Your Email</label>
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="contact-us-input"
                />
              </div>
              <div className="contact-us-input-container">
                <label className="contact-us-label">Subject</label>
                <input
                  placeholder="Enter subject"
                  type="text"
                  className="contact-us-input"
                />
              </div>
              <div className="contact-us-input-container">
                <label className="contact-us-label">
                  Your Message(Optional)
                </label>
                <textarea
                  cols={12}
                  rows={4}
                  placeholder="Message"
                  className="contact-us-input"
                ></textarea>
              </div>
              <div className="contact-us-button-contianer">
                <button className="contact-us-button">Submit</button>
              </div>
            </form>
          </div>
          <div className="contact-us-details-container">
            <div className="contact-us-text-container">
              <div>
                <h2 className="contact-us-heading">Contact Us</h2>
                <p className="contact-us-para-2">
                  Multi-line telephone hotline daily 08:00am – 09:00pm
                </p>
              </div>
              <div>
                <div className="contact-us-icon-container">
                  <FaSquarePhone className="contact-us-icon" />{" "}
                  <h2
                    className="contact-us-heading"
                    style={{ marginBottom: "0px" }}
                  >
                    986-456-6782
                  </h2>
                </div>
                <p className="contact-us-para-2">
                  Calls from mobile and landlines within USA are free
                </p>
              </div>
              <div>
                <div className="contact-us-icon-container">
                  <IoLocationSharp className="contact-us-icon" />{" "}
                  <h2
                    className="contact-us-heading"
                    style={{ marginBottom: "0px" }}
                  >
                    New York
                  </h2>
                </div>
                <p className="contact-us-para-2">
                  {" "}
                  70 Washington Square South, NY 10012, United States
                </p>
              </div>
            </div>
            <div>
              <div className="contact-us-icons-container">
                {" "}
                <button className="contact-us-bottom-icon">
                  <FaFacebookF />
                </button>
                <button className="contact-us-bottom-icon">
                  <FaLinkedinIn />
                </button>
                <button className="contact-us-bottom-icon">
                  <FaInstagram />
                </button>
                <button className="contact-us-bottom-icon">
                  <FaYoutube />
                </button>
              </div>
              <br />
              <p>Email: abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
