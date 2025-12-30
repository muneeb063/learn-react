// {} this is used to give attributes to the class e.g, {id: "heading", }

import React from "react";
import ReactDOM from "react-dom/client";

// rootReact.createElement => object => when rendere then it becomes HTMLElement

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://www.cafezouk.com/images/Special%20Dishes/Sp1.jpg"
        alt="res-logo"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.5 Stars</h4>
      <h4>40 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Burger King" cuisine="American" />
        <RestaurantCard resName="Pizza Hut" cuisine="Italian" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<AppLayout />); // this is how we render a functional component
