// pages/index.js
'use Client'
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeadBoady() {
  return (
      <><div className="right-div">
          <div className="services-container">
              <h2 className="services-title">Services</h2>
              <div className="button-group">
                  <a href="#" className="service-button">Food</a>
                  <a href="/recipeshare" className="service-button">Recipe Share</a>
                  <a href="#" className="service-button">Online Marketplace</a>
                    <a href="#" className="service-button">Nutrirnt App</a>
                  <a href="#" className="service-button">Restaurant Directory</a>
                  <a href="#" className="service-button">Cooking & Nutrition Classes </a>
                  <a href="#" className="service-button">Online dietitian</a>
              </div>
          </div>
      </div><div className="left-div">
              <div className="text-container">
                  <h2 className="bold-text">Your One-Stop Food Destination</h2>
                  <p className="small-text">Your gateway to a world of flavors, wellness, and connection. Dive into mouthwatering recipes, stay on top of your nutrition, find the perfect dining spots, shop local, and learn from the experts. Welcome to the One Stop Shop for all your food and health desires.</p>
              </div>
          </div></>

  );
};
