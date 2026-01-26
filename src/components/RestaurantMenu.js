import Shimmer from "../Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restInfo = useRestaurantMenu(id);

  const [showIndex, setShowIndex] = useState(0);

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
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.name}
          data={category}
          showItem={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
