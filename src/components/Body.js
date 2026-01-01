import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      id: 1,
      name: "Domino's Pizza",
      cuisine: "Italian, Fast Food",
      img: "Sp2.jpg",
      rating: 4.2,
      time: "30 minutes",
      price: "₹500 for two",
    },
    {
      id: 2,
      name: "King's Pizza",
      cuisine: "Italian, Fast Food",
      img: "Sp3.jpg",
      rating: 3.2,
      time: "30 minutes",
      price: "₹500 for two",
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");

            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.rating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            setListOfRestaurants(listOfRestaurants);
            console.log(listOfRestaurants);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
