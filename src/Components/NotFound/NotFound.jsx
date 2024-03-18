import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound({ image, title }) {
  const navigate = useNavigate();
  return (
    <div className="not-found-main-container">
      <div className="not-found-image-container">
        <img src={image} className="not-found-image" />
        <h2 className="not-found-heading">{title}</h2>
        <div className="not-found-button-container">
          <button className="not-found-button" onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
