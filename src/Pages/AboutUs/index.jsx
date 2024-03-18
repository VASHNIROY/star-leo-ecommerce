import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";
import { Rating } from "react-simple-star-rating";
import NewsSeltterBanner from "../../Components/NewSeltterBanner";
import FadeIn from "react-fade-in";
import CountTracker from "./CountTracker";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  const reviews = [
    {
      rating: 5,
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
      imgSrc: "https://enovathemes.com/propharm/wp-content/uploads/test3.jpg",
      name: "Eric Simpson",
    },
    {
      rating: 5,
      content:
        "There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself.",
      imgSrc: "https://enovathemes.com/propharm/wp-content/uploads/test4.jpg",
      name: "Simons Cooper",
    },
    {
      rating: 5,
      content:
        "These settings don’t provide big changes but only some small css changes in spaces or borders for example.",
      imgSrc: "https://enovathemes.com/propharm/wp-content/uploads/test5.jpg",
      name: "Kaleb Yurs",
    },
    {
      rating: 5,
      content:
        "These worked out well for the crab-feed I was attending the other week and got here just on time.",
      imgSrc: "https://enovathemes.com/propharm/wp-content/uploads/test2.jpg",
      name: "Sidney Millspaugh",
    },
  ];

  return (
    <div className="medicine-about-us-whole-container">
      <div className="medicine-about-us-main-container">
        <div className="medicine-about-us-mini-container">
          <h1 className="medicine-about-us-title">About Us</h1>
          <p className="medicine-about-us-text">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human.
          </p>
        </div>
        <div className="medicine-about-us-button-container">
          <button
            className="medicine-about-us-button"
            onClick={() => navigate("/contact-us")}
          >
            Contact us
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="medicine-about-us-trusted-container">
        <div className="medicine-about-us-count-container">
          <div className="medicine-about-us-count1">
            <h1 className="medicine-about-us-count-heading">
              <CountTracker initialValue={0} targetValue={100000} />
            </h1>
            <p className="medicine-about-us-count-para">Monthly Visits</p>
          </div>
          <div className="medicine-about-us-count1">
            <h1 className="medicine-about-us-count-heading">
              <CountTracker initialValue={0} targetValue={12000} />
            </h1>
            <p className="medicine-about-us-count-para">Customers</p>
          </div>
          <div className="medicine-about-us-count1">
            <h1 className="medicine-about-us-count-heading">
              <CountTracker
                initialValue={0}
                targetValue={20000}
                isLast={true}
              />
            </h1>
            <p className="medicine-about-us-count-para">Industry Awards</p>
          </div>
        </div>
      </div>
      <FadeIn>
        <div className="medicine-about-us-card-container">
          <div className="medicine-about-us-card-sub-container">
            <div className="medicine-about-us-image-container">
              <img
                className="medicine-about-us-image"
                src="https://enovathemes.com/propharm/wp-content/uploads/post9.jpg"
                alt=""
              />
            </div>
            <div className="medicine-about-us-text-container">
              <h1 className="medicine-about-us-title">What Makes Us, Us?</h1>
              <p className="medicine-about-us-para">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human.
              </p>
              <h1 className="medicine-about-us-heading">Our background</h1>
              <p className="medicine-about-us-para">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because.
              </p>
              <p className="medicine-about-us-para">
                {" "}
                <IoIosArrowForward style={{ color: "#39cb74" }} /> Nor again is
                there anyone who loves or pursues or desires.
              </p>
              <p className="medicine-about-us-para">
                <IoIosArrowForward style={{ color: "#39cb74" }} /> But I must
                explain to you how all this mistaken idea.
              </p>
              <p className="medicine-about-us-para">
                <IoIosArrowForward style={{ color: "#39cb74" }} /> No one
                rejects, dislikes, or avoids pleasure itself, because it is
                pleasure.
              </p>
            </div>
          </div>
        </div>
        <div className="medicine-about-us-card-container">
          <div className="medicine-about-us-card-sub-container">
            <div className="medicine-about-us-text-container">
              <h1 className="medicine-about-us-title">Why choose us?</h1>
              <p className="medicine-about-us-para">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human.
              </p>
              <p className="medicine-about-us-para">
                No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences.
              </p>
              <h1 className="medicine-about-us-heading">Technology we use</h1>
              <p className="medicine-about-us-para">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because.
              </p>
            </div>
            <div className="medicine-about-us-image-container">
              <img
                className="medicine-about-us-image"
                src="https://enovathemes.com/propharm/wp-content/uploads/post6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </FadeIn>
      <div className="client-reviews-main-container">
        <div className="clent-reviews-mini-container">
          <h1 className="client-reviews-heading">Clients Reviews</h1>
          <p className="client-reviews-para">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because.
          </p>
        </div>
        <div className="client-reviews-cards-container">
          {reviews.map((review, index) => (
            <div className="client-reviews-card" key={index}>
              <Rating size={25} initialValue={review.rating} />
              <p className="client-reviews-card-para">{review.content}</p>
              <img className="client-reviews-img" src={review.imgSrc} alt="" />
              <p className="client-reviews-name">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="client-reviews-follow-instagram-container">
        <h1 className="client-reviews-follow-heading">
          Follow us in instagram @propharm
        </h1>
        <div className="client-reviews-follow-img-container">
          <img
            className="client-reviews-follow-img"
            src="https://enovathemes.com/propharm/wp-content/uploads/inst_placeholder_1.jpg"
            alt=""
          />
          <img
            className="client-reviews-follow-img"
            src="https://enovathemes.com/propharm/wp-content/uploads/inst_placeholder_2.jpg"
            alt=""
          />
          <img
            className="client-reviews-follow-img"
            src="https://enovathemes.com/propharm/wp-content/uploads/inst_placeholder_3.jpg"
            alt=""
          />
          <img
            className="client-reviews-follow-img"
            src="https://enovathemes.com/propharm/wp-content/uploads/inst_placeholder_4.jpg"
            alt=""
          />
          <img
            className="client-reviews-follow-img"
            src="https://enovathemes.com/propharm/wp-content/uploads/inst_placeholder_5.jpg"
            alt=""
          />
          <img
            className="client-reviews-follow-img"
            src="https://enovathemes.com/propharm/wp-content/uploads/inst_placeholder_6.jpg"
            alt=""
          />
        </div>
      </div>
      <NewsSeltterBanner />
    </div>
  );
}
export default AboutUs;
