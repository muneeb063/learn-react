import { useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // `https://corsproxy.io/?${BASE_API_URL}listRestaurantMenu/${id}`
      `${BASE_API_URL}?v=${Date.now()}`,
    );
    const json = await data.json();

    const restaurants =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];

    const restaurant =
      restaurants.find((r) => r?.info?.id === String(id))?.info ?? null;

    // setRestInfo(json);
    setRestInfo(restaurant);
  };
  return restInfo;
};

export default useRestaurantMenu;
