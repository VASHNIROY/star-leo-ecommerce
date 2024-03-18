import { useEffect, useState } from "react";
import "./CategoryItem.css";
import { useNavigate } from "react-router";

const baseUrl = import.meta.env.VITE_BASE_URL;

const CategoryItem = ({ categoryId }) => {
  const [productsList, setProductsList] = useState([]);
  const navigate = useNavigate();

  const [noData, setError] = useState(false);

  const categoryItemData = {
    vendor_id: "4d513d3d",
    category_id: categoryId,
  };

  useEffect(() => {
    getCategoryItems();
  }, [categoryId]);

  const getCategoryItems = async () => {
    const formData = new FormData();
    Object.entries(categoryItemData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const api = `${baseUrl}getProduct`;
    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();
      if (data.status) {
        setProductsList(data.data);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="category-item-main-container">
      {noData ? (
        <p>Data Not Found</p>
      ) : (
        <>
          {productsList.map((el) => (
            <div
              key={el.id}
              className="category-item-card"
              onClick={() => navigate(`/product/${el.id}`)}
            >
              <img src={el.home_image} className="category-item-image" />
              <p className="category-item-name">{el.name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryItem;
