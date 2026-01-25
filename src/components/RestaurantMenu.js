import Shimmer from "../Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restInfo = useRestaurantMenu(id);

  const info = restInfo;

  const categories = info?.categories;

  if (!info) return <Shimmer />;

  const { name, cuisines, costForTwo } = info;

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold m-6 text-lg">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwo}
      </p>

      {/* categories accordian */}
      {categories.map((category) => (
        <RestaurantCategory key={category?.name} data={category} showItem = {false} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
