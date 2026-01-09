import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { BASE_API_URL } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://corsproxy.io/?${BASE_API_URL}listRestaurants`
      );

      const json = await data.json();
      console.log("Body",json);
      const restaurants =
        json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];
      setListOfRestaurants(restaurants);
      setFilteredList(restaurants);
    } catch (error) {
      console.error("Fetch failed:", err);
      setListOfRestaurants([]);
      setFilteredList([]);
    }
  };
  if (!filteredList) return <Shimmer />; // extra safety (shouldn't happen with fixes above)
  if (filteredList.length === 0 && listOfRestaurants.length === 0)
    return <Shimmer />;

  return (
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
            fetchData();
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link to={`/restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
