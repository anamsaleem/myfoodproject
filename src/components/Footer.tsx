// Header.tsx
"use client";
import React from "react";

export default function Footer() {
  return (
    <>
    <div>
     <h2 className="footer-heading">Contect Us</h2> 
      <div  className="footer">
        <img src="logo4.png" alt="Logo" className="footerLogo" />
        <p className="footer-logo-text">Explore a World of Culinary Delights, Nutritional Insights, and Foodie Community. Welcome to the One Stop Shop for Food and Health Enthusiasts.</p>
        <div className="footerColumns">
          <div className="footerColumn">
            <h3>Services</h3>
            <a href="#">Prodct info</a>
            <a href="#">chatbot</a>
            <a href="#">Directry</a>
            <a href="#">Classes</a>
          </div>
          <div className="footerColumn">
            <h3>Resources</h3>
            <a href="#">Document</a>
            <a href="#">New updates</a>
            <a href="#">Recipe Blog</a>
            <a href="#">Blogs</a>
          </div>
          <div className="footerColumn">
            <h3>Contect Detail</h3>
            <a href="#">Resturant Team</a>
            <a href="#">Recipe Team</a>
            <a href="#">SupportTeam</a>
            <a href="#">Team</a>
          </div>
          
        </div>
        </div>
        <div className="author-div">
        <p className="author-name">Copyright © 2023, Foodies - A Premium Next 13 Website ,  Develop by Team</p> {/* Add your author name here */}
      </div>
      </div>
    </>
  );
}
