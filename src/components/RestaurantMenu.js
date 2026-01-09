import { useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/constants";
import Shimmer from "../Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {

const [restInfo, setRestInfo] = useState(null);

const {id } = useParams();
console.log("id: ", id );

useEffect(() =>{
fetchMenu();
},[]);

const fetchMenu = async () =>{
 const data = await fetch(
        `https://corsproxy.io/?${BASE_API_URL}listRestaurantMenu/${id }`
      );

    const json = await data.json();
    console.log("card: " ,json);
    setRestInfo(json);
}

const info = restInfo?.data.cards[2]?.card?.card?.info;

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