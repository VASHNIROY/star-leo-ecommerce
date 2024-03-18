/* eslint-disable react/prop-types */
import { useState } from "react";
import "./sidebar.css";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Scrollbars } from "react-custom-scrollbars";
import { useAppContext } from "../../../Context";

const sidebarMenuItems = [
  { id: 1, item: "Home" },
  { id: 2, item: "Inner Pages" },
  { id: 3, item: "Blog" },
  { id: 4, item: "Shop" },
];

const Sidebar = ({ isMenuopen, setMenuOpen }) => {
  const [isMenuItem, setMenuItem] = useState("menu");
  const [isArrowOpen, setArrow] = useState(sidebarMenuItems[0].item);

  const {categoryList} = useAppContext();


  const handleMenuChange = () => {
    setMenuOpen(false);
  };

  function MenuList() {
    return (
      <ul className="menu-ul-list">
        {" "}
        {sidebarMenuItems.map((each) => (
          <li className="menu-list-items-li" key={each.id}>
            <p className="">{each.item}</p>
            {isArrowOpen === each.item ? (
              <MdKeyboardArrowDown onClick={() => setArrow(each.id)} />
            ) : (
              <MdKeyboardArrowRight onClick={() => setArrow(each.item)} />
            )}
          </li>
        ))}
      </ul>
    );
  }

  function ShopList() {
    return (
      <Scrollbars style={{ width: 260, height: 400 }}>
        <ul className="menu-ul-list">
          {" "}
          {categoryList.map((each) => (
            <li className="menu-list-items-li" key={each.id}>
              <p className="">{each.name}</p>
              {isArrowOpen === each.item ? (
                <MdKeyboardArrowDown onClick={() => setArrow(each.id)} />
              ) : (
                <MdKeyboardArrowRight onClick={() => setArrow(each.name)} />
              )}
            </li>
          ))}
        </ul>
      </Scrollbars>
    );
  }

  return (
    isMenuopen && (
      <div className="sidebar-main-container">
        <IoMdClose className="sidebar-close-icon" onClick={handleMenuChange} />
        <div style={{ width: "100%" }}>
          <ul className="sidebar-menu-bar">
            <li
              className={`sidebar-menu-items ${
                isMenuItem === "menu" ? "sidebar-menu-items-active" : ""
              }`}
              onClick={() => setMenuItem("menu")}
            >
              Menu
            </li>
            <li
              className={`sidebar-menu-items ${
                isMenuItem === "shop" ? "sidebar-menu-items-active" : ""
              }`}
              onClick={() => setMenuItem("shop")}
            >
              Shop
            </li>
          </ul>
        </div>
        {isMenuItem === "menu" ? MenuList() : ShopList()}
      </div>
    )
  );
};

export default Sidebar;
