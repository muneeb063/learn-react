import { useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://corsproxy.io/?${BASE_API_URL}listRestaurantMenu/${id}`
    );
    const json = await data.json();
    console.log("Restaurant Menu Data: ", json);
    setRestInfo(json);
  };
  return restInfo;
};

export default useRestaurantMenu;
