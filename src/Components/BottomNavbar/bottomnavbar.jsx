import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import "./bottomnav.css";
import { useAppContext } from "../../Context";

const bottonNavIcons = [
  {
    id: 1,
    icon: <CiHome className="bottom-nav-icon-size" />,
    name: "Home",
    route: "/",
  },
  { id: 2, icon: <CiUser className="bottom-nav-icon-size" />, name: "User" },
  {
    id: 3,
    icon: <CiShoppingCart className="bottom-nav-icon-size" />,
    name: "Cart",
    route: "/cart",
  },
  {
    id: 4,
    icon: <CiHeart className="bottom-nav-icon-size" />,
    name: "Wishlist",
    route: "/wishlist",
  },
];

export default function SimpleBottomNavigation() {
  const [bottomNaviconActive, setBottomNaviconActive] = useState("Home");
  const { cartDetails, wishList } = useAppContext();
  const [wishListCount, setWishlistCount] = useState(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check if cartDetails.data is not null or undefined before using its length
    if (cartDetails.data && Array.isArray(cartDetails.data)) {
      setCount(cartDetails.data.length);
    }
  }, [cartDetails.data]);

  useEffect(() => {
    // Check if wishList.data is not null or undefined before using its length
    if (wishList && Array.isArray(wishList)) {
      setWishlistCount(wishList.length);
    }
  }, [wishList]);

  return (
    <div className="bottomnav-main-container">
      <ul className="bottomnav-ul-container">
        {bottonNavIcons.map((each) => {
          const bottomNavClassName =
            bottomNaviconActive === each.name
              ? "bottom-nav-icons-container-active"
              : "bottom-nav-icons-container";

          return (
            <li
              key={each.id}
              className={`bottom-nav-icons-container ${bottomNavClassName}`}
              onClick={() => setBottomNaviconActive(each.name)}
            >
              {(() => {
                switch (each.name) {
                  case "Cart":
                    return (
                      <>
                        <Link to={each.route}>
                          <Badge badgeContent={count} color="primary">
                            {each.icon}
                          </Badge>
                        </Link>
                        {bottomNaviconActive === each.name && (
                          <p className="bottomnav-icon-label">{each.name}</p>
                        )}
                      </>
                    );
                  case "Wishlist":
                    return (
                      <>
                        <Link to={each.route}>
                          <Badge badgeContent={wishListCount} color="primary">
                            {each.icon}
                          </Badge>
                        </Link>
                        {bottomNaviconActive === each.name && (
                          <p className="bottomnav-icon-label">{each.name}</p>
                        )}
                      </>
                    );
                  default:
                    return (
                      <>
                        {" "}
                        <Link to={each.route}>{each.icon}</Link>
                        {bottomNaviconActive === each.name && (
                          <p className="bottomnav-icon-label">{each.name}</p>
                        )}
                      </>
                    );
                }
              })()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
