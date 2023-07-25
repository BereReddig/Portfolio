import React from "react";
import "../Header/header.css";
import myPicture from "../../assets/img/portfolio_image.jpg";

const Header = () => {
  return (
    <section className="header">
      <header>
        <div className="photo">
          <img src={myPicture} alt="" />
        </div>
        <div className="title">
          <h1>Berenice Reddig</h1>
          <h2>Web Developer</h2>
        </div>
      </header>
    </section>
  );
};

export default Header;
