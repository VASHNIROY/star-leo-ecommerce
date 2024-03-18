// import { Rating } from "react-simple-star-rating";
import "./sponsoredProducts.css";
import { useAppContext } from "../../Context";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

function SponsoredProducts() {
  // const carouselItems = [

  const { sponsoredProducts } = useAppContext();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sponsoredProducts && sponsoredProducts.length > 0) {
      setIsLoading(false);
    }
  }, [sponsoredProducts]);

  return (
    <>
      <h1 className="medicine-curosal-main-heading">Sponsored Products</h1>
      {isLoading ? (
        <Loader value={40} />
      ) : (
        <>
          <div className="medicine-curosal-main-container">
            <div className="medicine-curosal-mini-container">
              <div className="medicine-curosal-sub-container">
                {sponsoredProducts.map((item) => (
                  <div
                    key={item.brand_id}
                    className="medicine-cursoal-row1-container"
                  >
                    <img
                      src={item.home_image}
                      alt={item.name}
                      className="medcine-cursal-image"
                    />
                    <div
                      className="medicine-curosal-content-container"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      {/* <Rating size={25} initialValue={item.rating} /> */}
                      <h5 className="medicine-curosal-heading">{item.name}</h5>
                      <p className="medicine-curosal-price">
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          {item.unit_mrp}
                        </span>{" "}
                        {item.unit_sales_price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SponsoredProducts;
