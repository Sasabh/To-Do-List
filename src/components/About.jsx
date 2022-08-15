import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Version 1.0.0</h1>
      <p>Welcome to the About Page - Testing React Router</p>
      <Link to="/to-do-list">Go Back</Link>
    </div>
  );
};

export default About;
