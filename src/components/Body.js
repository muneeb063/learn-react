import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  let actualData = [];

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://gist.githubusercontent.com/omar94hamza/c96f0be02bffa48056e12893be8eda36/raw/66e5f26a6013be9f1627310e676619ae4c87ce75/restaurants.json"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json);
    setFilteredList(json);
  };

  //COnditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              if (filteredRestaurants.length === 0) return;
              setFilteredList(filteredRestaurants);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
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
            //setListOfRestaurants(restaurantList);
            FetchData();
            // console.log(restaurantList);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
