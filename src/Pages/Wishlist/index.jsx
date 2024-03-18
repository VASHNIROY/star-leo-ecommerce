import { useAppContext } from "../../Context";
import "./index.css";

import { HiMiniXMark } from "react-icons/hi2";

import { FaRupeeSign } from "react-icons/fa";

import emptyWishList from "../../Utils/emptywish.png";
import NotFound from "../../Components/NotFound/NotFound";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Wishlist = () => {
  const { wishList, FetchCartDetails, addToWishlist, fetchWishlist } =
    useAppContext();

  const navigate = useNavigate();
  const userid = Cookies.get("userid");

  const addToCartbtn = async (id) => {
    if (userid) {
      const productDetails = wishList.filter((el) => el.id === id);

      const addToCartBody = {
        vendor_id: "4d544d3d",
        user_id: "1",
        product_id: productDetails[0].id,
        unit: productDetails[0].unit,
        unit_id: productDetails[0].unit_details[0].unit_id,
        unit_value: productDetails[0].unit_details[0].unit_value,
        type: "add",
        product_type: productDetails[0].product_type,
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const addToWish = async (id) => {
    const data = await addToWishlist(id);
    fetchWishlist();
  };

  return (
    <div className="wish-list-main-container">
      <h1 className="wish-list-main-heading">My Wishlist</h1>
      {wishList ? (
        <div className="wish-list-list-container">
          {wishList.map((each) => (
            <div key={each.wishlist_id} className="wish-list-list-card">
              <div className="wish-list-image-container">
                <img
                  src={each.home_image}
                  alt={each.brand_name}
                  className="wish-list-image"
                />
              </div>

              <div>
                <div className="wish-list-heading">
                  <p className="wish-list-heading-hidden">{each.name}</p>
                  <div className="wish-list-flex">
                    <p className="wish-list-price">
                      Price :
                      <span>
                        <FaRupeeSign size={16} />
                      </span>
                      {each.unit_sales_price}
                    </p>
                    <button
                      className="wish-list-page-button"
                      onClick={() => addToCartbtn(each.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <p>
                <HiMiniXMark
                  className="wish-list-cancel-icon"
                  onClick={() => addToWish(each.id)}
                />
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <NotFound image={emptyWishList} title={"Your Wishlist is Empty"} />
        </>
      )}
      {/* <div className="wish-list-subtotal-container">
        <p className="wish-list-sub-total-text">SubTotal : $20</p>
        <div className="wish-list-button-container">
          <button className="wish-list-page-button">View Cart</button>
          <button className="wish-list-page-button">Check out</button>
        </div>
      </div>*/}
    </div>
  );
};
export default Wishlist;
