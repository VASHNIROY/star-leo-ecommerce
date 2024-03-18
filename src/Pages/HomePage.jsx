import FeaturedProducts from "../Components/FeaturedProducts/featuredproducts";
import Layout from "../Components/Layout/layout";
// import MedicineCard from "../Components/MedicineCard/medicineCard";
import SellingProducts from "../Components/SellingProducts/sellingproducts";
import NewSeltterBanner from "../Components/NewSeltterBanner";
import OfferCards from "../Components/OfferCards";
import CategorySlider from "../Components/CategorySlider/categorySlider";
import SponsoredProducts from "../Components/SponsoredProducts/sponsoredProducts";
import AdvertBanner from "../Components/AdvertisingBanner/advertBanner";
import BannerCarousel from "../Components/BannerCarousel/bannerCarousel";
import Loader from "../Components/Loader/Loader";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const disableLoader = () => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    disableLoader();
  });

  return (
    <>
      {isLoading ? (
        <Loader value={75} />
      ) : (
        <>
          <BannerCarousel />
          <FeaturedProducts />
          <CategorySlider />
          <Layout title={"ALl Products - Best offers "}>
            <NewSeltterBanner />
            {/* <MedicineCard /> */}
            <SponsoredProducts />
            <OfferCards />
            <SellingProducts />
            <AdvertBanner />
          </Layout>
        </>
      )}
    </>
  );
};

export default HomePage;
