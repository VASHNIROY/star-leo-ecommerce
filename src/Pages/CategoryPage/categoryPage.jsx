//import React from 'react'
import SideForm from "../../Components/SideForm/sideForm.jsx";
import FeaturedProducts from "../../Components/FeaturedProducts/featuredproducts";
const CategoryPage = () => {
  return (
    <div className="container">
      <div className="subCategories-main-container row">
        <div className="col-md-3 col-xs-12">
          <SideForm />
        </div>
        <div className="col-md-9 col-xs-12">
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
