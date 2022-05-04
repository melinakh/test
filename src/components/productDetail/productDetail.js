import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import Header from "../Header/Header";
import { Button } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Productdetail = () => {
  let params = useParams();
  const [product, setProduct] = useState({});
  const [showProduct, setShowProduct] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/Products").then((res) => {
      setProduct(res.data);
      res.data.map((item) => {
        if (item.name === params.productName) {
          setShowProduct(item);
        }
      });
    });
  }, []);
  console.log(showProduct.id);
  const addToOrders = () => {
    axios({
      method: "post",
      url: "http://localhost:3000/Orders",
      data: {
        name: showProduct.name,
        id: showProduct.id,
      },
    });
  };
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        {showProduct.img?.map((address) => (
          <img className="product-pic" alt="product-img" src={address} />
        ))}
        <div className="text">
          <h1> نام محصول:{showProduct.name}</h1>
          <h3>دسته بندی:{showProduct.Sub_Category}</h3>
          <h3> قیمت:{showProduct.Price}</h3>
        </div>
      </div>
      <Button onClick={addToOrders} variant="outline-secondary">
        افزودن به سبد خرید <ShoppingCartIcon />
      </Button>{" "}
    </>
  );
};

export default Productdetail;
