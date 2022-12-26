import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="main-header">
      <HashLink to={"/#Home"}>
        <h1 className="Title">Blog App</h1>
      </HashLink>
      <Link to={"/Aboutus"}>About Us</Link>
    </div>
  );
};

export default Header;
