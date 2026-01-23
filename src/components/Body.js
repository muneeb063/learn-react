import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { BASE_API_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://muneeb063.github.io/restaurant-data/restaurants.json",
      );

      const json = await data.json();

      const restaurants =
        json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];

      setListOfRestaurants(restaurants);
      setFilteredList(restaurants);
    } catch (error) {
      console.error("Fetch failed:", error);
      setListOfRestaurants([]);
      setFilteredList([]);
    }
  };

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  }

  if (!filteredList) return <Shimmer />; // extra safety (shouldn't happen with fixes above)
  if (filteredList.length === 0 && listOfRestaurants.length === 0)
    return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border-solid border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
              );
              if (filteredRestaurants.length === 0) return;
              setFilteredList(filteredRestaurants);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.5,
              );
              setFilteredList(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              fetchData();
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-left">
        {filteredList.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            {
              /**if the restaurant is promoted then add a promoted label to it */
              restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
