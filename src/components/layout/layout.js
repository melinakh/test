import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
