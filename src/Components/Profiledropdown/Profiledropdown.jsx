import { Link, useNavigate } from "react-router-dom";

import "./Profiledropdown.css";
import Cookies from "js-cookie";

export default function Profiledropdown() {
  const navigate = useNavigate();

  const removeUser = () => {
    Cookies.remove("userid");
    navigate("/login");
  };
  return (
    <div className="profileContainer">
      <ul className="profileListContainer">
        <Link
          to="/orderlist"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <li>My Orders</li>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/wishlist">
          <li>WishList</li>
        </Link>
        <li>Gift Cards</li>
        <li>Rewards</li>

        <li onClick={removeUser}>Log out</li>
      </ul>
    </div>
  );
}
