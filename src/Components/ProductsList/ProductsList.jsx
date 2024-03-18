import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicCard from "../BasicCard/basiccard";

import "./ProductList.css";

const baseUrl = import.meta.env.VITE_BASE_URL;

const ProductsList = () => {
  const { id } = useParams();

  const [productsData, setProducts] = useState([]);

  const getPoductsBody = {
    brand_id: id,
  };

  const getProductsFormData = new FormData();

  Object.entries(getPoductsBody).forEach(([key, value]) => {
    getProductsFormData.append(key, value);
  });

  const api = `${baseUrl}getProduct`;
  const options = {
    method: "POST",
    body: getProductsFormData,
  };

  const getProducts = async () => {
    try {
      const response = await fetch(api, options);
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className="product-list-main-container">
      {productsData && productsData.length > 0 ? (
        <>
          {" "}
          {productsData.map((el) => (
            <>
              <BasicCard item={el} />
            </>
          ))}
        </>
      ) : (
        <div>
          <h4>No Data Found</h4>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
