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
  const { resData } = props;

  const { resName, cuisine, img, rating, time, price } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={img} alt="res-logo" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{time}</h4>
      <h4>{price}</h4>
    </div>
  );
};

const restaurantList = [
  {
    id: 1,
    resName: "Burger King",
    cuisine: "American",
    img: "https://www.cafezouk.com/images/Special%20Dishes/Sp1.jpg",
    rating: 4.5,
    time: "40 minutes",
    price: "₹300 for two",
  },
  {
    id: 2,
    resName: "Pizza Hut",
    cuisine: "Italian",
    img: "https://www.cafezouk.com/images/Special%20Dishes/Sp5.jpg",
    rating: 4.5,
    time: "40 minutes",
    price: "₹400 for two",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
        ;
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
