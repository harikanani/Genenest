import React from "react";
import { Link } from "react-router-dom";
// import "./load";
// import logo from "../public/logo192.png";
const Navbar = () => {
  const $ = window.$;
  // console.log($);
  // $(document).ready(function () {
  //   console.log("ready!");
  //   $("#tog").click(function () {
  //     console.log("clicked");
  //     $("#menum").slideToggle();
  //   });
  // });

  return (
    <div>
      <div
        className="hamb"
        id="tog"
        onClick={() => $("#menum").slideToggle("slow")}
      >
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="nav">
        <div className="logo">
          <img src="logo192.png" className="image" alt="" />
          <h2 style={{ color: "white" }}>Genenest Biotech</h2>
        </div>
        <div className="links">
          <ul className="menu" id="menum">
            <li>
              <Link to="/home" className="active">
                Home
              </Link>
            </li>
            <li className="showsub">
              <Link to="products">
                Products <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className="menu2">
                <li>
                  <a href="/">item1</a>
                </li>
                <li>
                  <a href="/">item2</a>
                </li>
                <li>
                  <a href="/">item3</a>
                </li>
                <li>
                  <a href="/">item4</a>
                </li>
                <li>
                  <a href="/">item5</a>
                </li>
                <li>
                  <a href="/">item6</a>
                </li>
                <li>
                  <a href="/">item7</a>
                </li>
                <li>
                  <a href="/">item8</a>
                </li>
                <li>
                  <a href="/">item9</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="consulting" style={{ position: "relative" }}>
                Consulting
              </Link>
            </li>
            <li>
              <Link to="consulting" style={{ position: "relative" }}>
                Production
              </Link>
            </li>
            <li>
              <Link to="consulting" style={{ position: "relative" }}>
                venchures
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
