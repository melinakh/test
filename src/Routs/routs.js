import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../components/admin/login_admin/admin";
import Shoppingbasket from "../components/shoppingBasket/shoppingBasket";
import Homepage from "../homePage/homePage";
import Productdetail from "../components/productDetail/productDetail";
import RecipeReviewCard from "../components/Products/product-facewash/allDataOfFacewash";
import RecipeReviewCardMoisture from "../components/Products/product-moisturizer/allDataOfMoisture";
const Routs = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shoppingbasket />} />
        <Route path=":productName" element={<Productdetail />} />
        <Route
          path="/products/category/faceWash/page/1"
          element={<RecipeReviewCard />}
        />
        <Route
          path="/products/category/moisture/page/1"
          element={<RecipeReviewCardMoisture />}
        />
      </Routes>
    </div>
  );
};

export default Routs;
