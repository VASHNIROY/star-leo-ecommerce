import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import "../MedicineCard/medicinecard.css";
import { useAppContext } from "../../Context";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

function SellingProducts() {
  const { recentlyViewedProducts } = useAppContext();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recentlyViewedProducts && recentlyViewedProducts.length > 0) {
      setIsLoading(false);
    }
  }, [recentlyViewedProducts]);

  return (
    <>
      <div className="medicines-categories-container">
        <h1 className="medicines-categories-heading">
          Recently Viewed Products
        </h1>
        {/* <div className="medicines-categories-button-container">
          <button className="medicines-categories-button">Supplements</button>
          <button className="medicines-categories-button">Medicines</button>
          <button className="medicines-categories-button">Herbs</button>
        </div> */}
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="medicines-card-main-container">
            <div className="medicines-cards-mini-container">
              {recentlyViewedProducts.map((product) => (
                <div
                  key={product.id}
                  className="medicines-cards-main-category-container"
                  style={{ height: "490px", width: "220px" }}
                >
                  <div className="medicines-cards-sub-category-container">
                    <div className="medicines-cards-new-buttons">
                      <button className="medicines-cards-button">Sales</button>
                    </div>
                  </div>
                  <div className="medicines-cards-icons-container">
                    <div className="medicines-cards-icons">
                      <FaRegHeart />
                    </div>
                  </div>
                  <div className="medicines-cards-image-container">
                    <img
                      className="medicines-cards-image"
                      style={{ height: "250px", width: "250px" }}
                      src={product.home_image}
                      alt={product.name}
                    />
                  </div>
                  <h2
                    className="medicines-cards-paragraph"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.name}
                  </h2>
                  <p className="medicines-cards-price">
                    {product.unit_mrp && (
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        {product.unit_mrp}
                      </span>
                    )}{" "}
                    {product.unit_sales_price}
                  </p>
                  <button
                    className="medicines-cards-cart-button"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {" "}
                    <MdOutlineShoppingCart />
                    Select Options{" "}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SellingProducts;
