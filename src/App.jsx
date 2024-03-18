import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import SimpleBottomNavigation from "./Components/BottomNavbar/bottomnavbar";
import { AppProvider } from "./Context";
import { useMediaQuery } from "@material-ui/core";
import ContactUs from "./Pages/ContactusPage/ContactUs";
import ProductViewdetail from "./Components/ProductViewdetail/ProductViewdetail";
import Login from "./Pages/LoginPage";
import ForgotPassword from "./Pages/LoginPage/ForgotPassword";
import CartPage from "./Pages/CartPage";
import Wishlist from "./Pages/Wishlist";
import AboutUs from "./Pages/AboutUs";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import OrdersList from "./Pages/OrdersList";
import OrderViewDetail from "./Pages/OrdersList/OrdersDetail";
import CategoryPage from "./Pages/CategoryPage/categoryPage";
import Register from "./Pages/Register/Register";
import ProductsList from "./Components/ProductsList/ProductsList";
import CategoryProductList from "./Components/CategoryProductList/CategoryProductList";

function App() {
  const isMobileScreen = useMediaQuery("(max-width: 1250px)");

  return (
    <div className="app-container">
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" Component={HomePage} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductViewdetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ordersdetail/:id" element={<OrderViewDetail />} />
          <Route path="/productslist/:id" element={<ProductsList />} />
          <Route path="/products/:id" element={<CategoryProductList />} />
          <Route path="/orderlist" element={<OrdersList />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
        <Footer />
        {isMobileScreen && <SimpleBottomNavigation />}
      </AppProvider>
    </div>
  );
}

export default App;
