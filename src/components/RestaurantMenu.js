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
    <div className=" m-4 p-4 w-[250] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <h1 className="font-bold text-lg">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <h2 className="font-bold text-md">Menu</h2>
      <ul className="list-disc pl-5">
        <li> Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>French Fries</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
