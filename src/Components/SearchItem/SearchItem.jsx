import { FaRupeeSign } from "react-icons/fa";
import "./SearchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ details, emptySearch }) => {
  const navigate = useNavigate();

  const goToItem = () => {
    navigate(`/product/${details.id}`);
    emptySearch();
  };
  return (
    <div key={details.id} className="search-item-main-container">
      <div className="search-item-container">
        <img
          src={details.image}
          alt={details.name}
          className="search-item-image"
        />{" "}
        <div className="search-item-text-container" onClick={goToItem}>
          <h2 className="search-item-heading">{details.name}</h2>
          <p className="search-item-price">
            {" "}
            <FaRupeeSign size={14} />
            {details.unit_sales_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
