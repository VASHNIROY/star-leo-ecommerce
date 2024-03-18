import { useRef, useState } from "react";
import "./ProductViewdetail.css";
//

import {
  FaRegHeart,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
  FaRupeeSign,
  FaTelegramPlane,
  FaCheck,
  FaHeart,
} from "react-icons/fa";
import { BsCheckLg, BsFillCartPlusFill } from "react-icons/bs";

import { FaGreaterThan } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
// import { BiSolidDiscount } from "react-icons/bi";
import Slider from "react-slick";
import { useAppContext } from "../../Context";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BasicCard from "../BasicCard/basiccard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import { FiShoppingCart } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";
import Cookies from "js-cookie";

const bannerImages = [
  {
    id: 6,
    category: "Baby",
    name: "MooGoo Baby & Child Cradle",
    home_image:
      "https://enovathemes.com/propharm/wp-content/uploads/product22-300x300.jpg",
    unit_sales_price: "$16.50",
    originalPrice: "$24.95",
    rating: 4,
  },
  {
    id: 7,
    category: "Health Topics",
    name: "Insulin Lispo Kwilpen",
    home_image:
      "https://enovathemes.com/propharm/wp-content/uploads/product74-300x300.jpg",
    unit_sales_price: "$18.88 - $32.88",
    originalPrice: "$35.95",
    rating: 3,
  },
  {
    id: 8,
    category: "Baby",
    name: "Promethazine",
    home_image:
      "https://enovathemes.com/propharm/wp-content/uploads/product1-300x300.jpg",
    unit_sales_price: "$22.00",
    originalPrice: "$31.95",
    rating: "",
  },
];

const moreToLove = [
  {
    id: 5,
    category: "Home",
    name: "Thar's Antiseptic Ointment",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product4-300x300.jpg",
    price: "$9.95",
    rating: 4,
  },
  {
    id: 6,
    category: "Baby",
    name: "MooGoo Baby & Child Cradle",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product22-300x300.jpg",
    price: "$16.50",
    rating: 4,
  },
  {
    id: 7,
    category: "Health Topics",
    name: "Insulin Lispo Kwilpen",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product74-300x300.jpg",
    price: "$18.88 - $32.88",
    rating: 3,
  },
  {
    id: 8,
    category: "Baby",
    name: "Promethazine",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product1-300x300.jpg",
    price: "$22.00",
    originalPrice: "$31.95",
    rating: "",
  },
];

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

const baseUrl = import.meta.env.VITE_BASE_URL;

const ProductViewdetail = () => {
  const [selectedProduct, setProduct] = useState("");
  // const [numberOfProducts, setNumberOfProducts] = useState(0);

  const [selectActive, setSelectActive] = useState("des");
  const [productDetails, setProductDetails] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const { FetchCartDetails, addToWishlist } = useAppContext();

  const [addingToWishlist, setAddingToWishlist] = useState(false);

  const navigate = useNavigate();
  const userid = Cookies.get("userid");
  const slider = useRef(null);
  const { id } = useParams();
  const getProductBody = {
    vendor_id: "4d513d3d",
    user_id: "1",
    product_id: id,
  };

  const fetchProductDetailsData = async () => {
    const productFormData = new FormData();

    Object.entries(getProductBody).forEach(([key, value]) => {
      productFormData.append(key, value);
    });

    const api = `${baseUrl}getProductDetails`;
    const options = {
      method: "POST",
      body: productFormData,
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();

      const productDetails = data.data;

      const similarProducts = data.similar_product;
      console.log(productDetails, "product details");

      setProductDetails(productDetails);
      setProduct(productDetails.gallery_image[0]);
      setSimilarProducts(similarProducts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToCart = async () => {
    if (userid) {
      const addToCartBody = {
        vendor_id: "4d544d3d",
        user_id: "1",
        product_id: id,
        unit: productDetails.unit_details[0].unit,
        unit_id: productDetails.unit_details[0].unit_id,
        unit_value: productDetails.unit_details[0].unit_value,
        type: "add",
        product_type: productDetails.product_type,
        cart_type: "ecommerce",
      };
      const addToCartformData = new FormData();

      Object.entries(addToCartBody).forEach(([key, value]) => {
        addToCartformData.append(key, value);
      });
      const api = `${baseUrl}addToCart`;
      const options = {
        method: "POST",
        body: addToCartformData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();
        FetchCartDetails();
        setIsAddedToCart(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const addtoWish = async () => {
    if (userid) {
      setAddingToWishlist(true);
      const data = await addToWishlist(id);
      setIsAddedToWishlist(!isAddedToWishlist);
      await fetchProductDetailsData();
      setAddingToWishlist(false);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchProductDetailsData();
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
  };

  const settings2 = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 3,
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

  return (
    <div className="product-view-detail-main-container">
      {isLoading ? (
        <Loader value={70} />
      ) : (
        <div className="product-view-detail-sub-container">
          <div className="product-view-detail-left-side-container">
            <div className="product-view-detail-first-container">
              <div className="product-view-detail-view-container">
                <div className="product-view-detail-save-container">
                  <p className="product-view-detail-save-text">Save $5</p>
                </div>
                <div className="product-view-detail-big-img-container">
                  <img
                    className="product-view-big-image"
                    src={
                      selectedProduct === ""
                        ? productDetails.home_image
                        : selectedProduct.image
                    }
                  />
                </div>
                <div className="product-view-detail-products-images-container">
                  {productDetails &&
                    productDetails.gallery_image &&
                    productDetails.gallery_image.map((each) => (
                      <>
                        {" "}
                        <img
                          className={`product-view-detail-products-image ${
                            each === selectedProduct ? "active" : ""
                          }`}
                          src={each.image}
                          alt={each.image}
                          onClick={() => setProduct(each)}
                        />
                      </>
                    ))}
                </div>
              </div>
              <div className="product-view-detail-container">
                <div className="product-view-details-first-container">
                  <h1 className="product-view-detail-heading">
                    {productDetails.name}
                  </h1>
                  {/* <div className="product-view-detail-review-container">
                  {" "}
                  <Rating size={20} initialValue={3.2} />{" "}
                  <p className="product-view-detail-review">
                    {" "}
                    (3 customer reviews)
                  </p>
                </div> */}
                </div>
                <hr />
                <div className="product-view-details-second-container">
                  <ul className="product-view-detail-un-order-list">
                    <li className="product-view-detail-li">
                      {" "}
                      <FaCheck className="product-view-detail-check" />3
                      cleaning programs
                    </li>
                    <li className="product-view-detail-li">
                      {" "}
                      <FaCheck className="product-view-detail-check" />
                      Digital display
                    </li>
                    <li className="product-view-detail-li">
                      <FaCheck className="product-view-detail-check" /> Memory
                      for 1 user
                    </li>
                  </ul>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: productDetails.additional_detaiils,
                    }}
                  /> */}
                </div>
                <hr />
                <div className="product-view-details-third-container">
                  <h2 className="product-view-detail-price">
                    <FaRupeeSign size={19} />
                    {productDetails.unit_details[0].unit_sales_price}
                    <span className="product-view-mrp-price">
                      {productDetails.unit_details[0].unit_mrp}
                    </span>
                  </h2>
                </div>
                <div className="product-view-details-four-container">
                  <div className="product-add-to-cart-container">
                    {/* <div className="product-add-button-container">
                    <button
                      className="product-add-button"
                      onClick={() => {
                        setNumberOfProducts(numberOfProducts - 1);
                        // addToCartbtn("remove");
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={numberOfProducts}
                      className="product-view-detail-input"
                    />
                    <button
                      className="product-add-button"
                      onClick={() => {
                        setNumberOfProducts(numberOfProducts + 1);
                        // addToCartbtn("add");
                      }}
                    >
                      +
                    </button>
                  </div> */}
                    {isAddedToCart ? (
                      <button className="product-added-to-cart-button">
                        <BsCheckLg /> Added To Cart
                      </button>
                    ) : (
                      <button
                        className="product-add-to-cart-button"
                        onClick={() => {
                          addToCart();
                        }}
                      >
                        <BsFillCartPlusFill /> Add to Cart
                      </button>
                    )}

                    <button className="product-buy-now-button">
                      <FiShoppingCart /> Buy now
                    </button>
                  </div>
                  <div className="product-add-to-categories-container">
                    {productDetails.wishlist_status === 1 ? (
                      <p
                        className="product-view-details-category-addet-to-wish"
                        onClick={addtoWish}
                      >
                        {" "}
                        <FaHeart color="#ef233c" /> Remove
                      </p>
                    ) : (
                      <>
                        {addingToWishlist ? (
                          <RotatingLines
                            visible={true}
                            height="20"
                            width="20"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />
                        ) : (
                          <p
                            className="product-view-details-category"
                            onClick={addtoWish}
                          >
                            {" "}
                            <FaRegHeart /> Add to wishlist
                          </p>
                        )}
                      </>
                    )}

                    {/* <p className="product-view-details-category">
                    <LuRepeat2 /> Add to compare
                  </p> */}
                    <p className="product-view-details-category">
                      <LuMail /> Ask about product
                    </p>
                  </div>
                  {/* <div className="product-discount-banner">
                  <BiSolidDiscount className="discount-icon" /> Add 15 products
                  to cart and get 10$ discount
                </div> */}
                  <div className="product-view-detail-icons-container">
                    <button className="product-view-detail-icon-button-f">
                      <FaFacebookF />
                    </button>
                    <button className="product-view-detail-icon-button-l">
                      <FaLinkedinIn />
                    </button>
                    <button className="product-view-detail-icon-button-p">
                      <FaPinterestP />
                    </button>
                    <button className="product-view-detail-icon-button-w">
                      <FaWhatsapp />
                    </button>
                    <button className="product-view-detail-icon-button-t">
                      <FaTelegramPlane />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-view-detail-bottom-container">
              <div className="product-view-detail-about-container">
                <div className="product-view-detals-select-buttons">
                  <button
                    className={`product-view-detail-select-button ${
                      selectActive === "des" && "select-active"
                    }`}
                    onClick={() => setSelectActive("des")}
                  >
                    Description
                  </button>
                  <button
                    className={`product-view-detail-select-button ${
                      selectActive === "add" && "select-active"
                    }`}
                    onClick={() => setSelectActive("add")}
                  >
                    Additional Information
                  </button>
                </div>
                {selectActive === "des" ? (
                  <div
                    className="product-view-detail-description-container"
                    dangerouslySetInnerHTML={{
                      __html: productDetails.description,
                    }}
                  />
                ) : (
                  <div className="product-view-detail-additional-information">
                    <table className="product-additionl-details-table">
                      <thead>
                        {" "}
                        <th></th>
                        <th></th>
                      </thead>

                      <tbody>
                        <tr className="product-additional-details-table-row">
                          <td className="product-additional-details-left-heading">
                            brand
                          </td>
                          <td className="product-additional-details-right-heading">
                            {productDetails.brand_name}
                          </td>
                        </tr>
                        <tr className="product-additional-details-table-row">
                          <td className="product-additional-details-left-heading">
                            Form
                          </td>
                          <td className="product-additional-details-right-heading">
                            {productDetails.specification[0].specification_key}
                          </td>
                        </tr>
                        <tr className="product-additional-details-table-row">
                          <td className="product-additional-details-left-heading">
                            Militers
                          </td>
                          <td className="product-additional-details-right-heading">
                            500
                          </td>
                        </tr>
                        <tr className="product-additional-details-table-row">
                          <td className="product-additional-details-left-heading">
                            Frequency
                          </td>
                          <td className="product-additional-details-right-heading">
                            {
                              productDetails.specification[0]
                                .specification_value
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="product-view-detail-related-products-container">
                <h3 className="product-view-detail-heading">
                  Similar Products
                </h3>
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
                <Slider ref={slider} {...settings2}>
                  {similarProducts.map((item) => (
                    <BasicCard item={item} key={item.id} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="product-view-detail-right-side-container">
            <div className="product-view-detail-banner-first-container">
              <Slider {...settings}>
                {bannerImages.map((item) => (
                  <BasicCard item={item} key={item.id} />
                ))}
              </Slider>
            </div>

            <div className="product-view-detail-mirror-banner-container">
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_3.png"
                alt="banner"
              />
              <div className="product-view-detail-banner-text-container">
                <p className="product-view-detail-banner-para">
                  Pyridoxine Vitamin B6
                </p>
                <h2 className="product-view-detail-banner-head">
                  Vitamins & Supplements
                </h2>
                <button className="product-view-detail-banner-button">
                  View more <FaGreaterThan size={12} />
                </button>
              </div>
            </div>

            <div className="product-view-detail-more-to-love-main-container">
              <h2 className="product-view-detail-more-to-love-heading">
                More To Love
              </h2>
              <div className="product-view-detail-more-to-love-container">
                {" "}
                {moreToLove.map((el) => (
                  <div
                    className="poduct-view-detail-more-to-love-card-container"
                    key={el.id}
                  >
                    <img
                      className="product-more-to-love-image"
                      src={el.image}
                      alt={el.name}
                    />
                    <h1 className="product-more-to-love-heading">{el.name}</h1>
                    <h3 className="product-more-to-love-category">
                      {el.category}
                    </h3>
                    <p className="product-more-to-love-price">{el.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="product-view-detail-mirror-banner-container-2">
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_4.png"
                alt="banner"
              />
              <div className="product-view-detail-banner-text-container">
                <p className="product-view-detail-banner-para">
                  Pyridoxine Vitamin B6
                </p>
                <h2 className="product-view-detail-banner-head">
                  Vitamins & Supplements
                </h2>
                <button className="product-view-detail-banner-button-2">
                  Shop now <FaGreaterThan size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductViewdetail;
