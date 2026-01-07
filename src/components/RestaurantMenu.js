import { useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/constants";
import Shimmer from "../Shimmer";

const RestaurantMenu = () => {

const [restInfo, setRestInfo] = useState(null);

useEffect(() =>{
fetchMenu();
},[]);

const fetchMenu = async () =>{
 const data = await fetch(
        `https://corsproxy.io/?${BASE_API_URL}listRestaurants`
      );

    const json = await data.json();
    console.log("card: " ,json);
    setRestInfo(json);
}

const info = restInfo?.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants[0]?.info;

if (!info) return <Shimmer />;

const { name, cuisines, costForTwo } = info;

    return (restInfo===null)? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1> 
            <p>{cuisines.join(", ")} - {costForTwo}</p> 
            
            <h2>Menu</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Pasta</li>
                <li>French Fries</li>
            </ul>    
        </div>
    )
}

export default RestaurantMenu;