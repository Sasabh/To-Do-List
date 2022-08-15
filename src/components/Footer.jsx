import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to="/to-do-list/about">About</Link>
    </footer>
  );
};

export default Footer;
