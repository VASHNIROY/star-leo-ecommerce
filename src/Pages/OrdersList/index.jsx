import { useState, useEffect } from "react";
import "./index.css";

import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

import noOrderImage from "../../Utils/noorders.jpg";

import NotFound from "../../Components/NotFound/NotFound";

const baseUrl = import.meta.env.VITE_BASE_URL;

const OrdersList = () => {
  const [orderDetailsData, setOrderDetailsData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userid = Cookies.get("userid");

    const ordersListData = {
      vendor_id: "4d513d3d",
      user_id: userid,
    };

    const ordersListformData = new FormData();

    Object.entries(ordersListData).forEach(([key, value]) => {
      ordersListformData.append(key, value);
    });

    const FetchOrderDetails = async (ordersListformData) => {
      const api = `${baseUrl}getUserOrders`;
      const options = {
        method: "POST",
        body: ordersListformData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();
        setOrderDetailsData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchOrderDetails(ordersListformData);
  }, []);

  console.log("render", orderDetailsData);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {orderDetailsData && orderDetailsData.length > 0 ? (
        <div className="orders-list-main-container">
          <div className="orders-list-mini-container">
            <img
              className="orders-list-main-image"
              src="https://ecom.taxoguru.com/image/category/1161896008.png"
              alt=""
            />
            <div className="orders-list-container">
              {orderDetailsData.map((each) => (
                <Link
                  to={`/ordersdetail/${each.id}`}
                  key={each.id}
                  style={{ textDecoration: "none" }}
                >
                  <div key={each.id} className="orders-list-card">
                    <div className="orders-list-image-container">
                      <img
                        src={each.product_image}
                        alt=""
                        className="orders-list-image"
                      />
                    </div>
                    <div className="orders-list-heading-container">
                      <div className="orders-list-heading">
                        <p className="orders-list-heading-hidden">
                          {each.product_name}
                        </p>

                        <p className="orders-list-quantity-text">
                          Delivery Charges:Free
                        </p>
                        <p className="orders-list-quantity-text">
                          Status: {each.status_text}
                        </p>
                        <p className="orders-list-quantity-text">
                          Price: {each.total_amount}
                        </p>
                      </div>
                      <p className="orders-list-quantity-text">
                        {each.slot_details}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <p className="orders-list-sub-total-text">SubTotal : $80</p>
        </div>
      ) : (
        <NotFound image={noOrderImage} title={"No Orders Found"} />
      )}
    </>
  );
};
export default OrdersList;
