import Shimmer from "../Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restInfo = useRestaurantMenu(id);

  const info = restInfo?.data.cards[2]?.card?.card?.info;

  if (!info) return <Shimmer />;

  const { name, cuisines, costForTwo } = info;

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>French Fries</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
