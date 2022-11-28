import React from "react";
import DataNavbar from "./utils/DataNavbar";
import logo from "../../assets/Logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
      </div>
      <div className="right-side">
        <ul>
          {DataNavbar.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}><h1>{item.name}</h1></Link>
              </li>
            );
          })}
        </ul>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
