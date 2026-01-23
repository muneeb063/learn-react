import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("Clicked - ", data?.data?.name);
    setShowItems(!showItems);
  };
  return (
    <div>
      {/* {Headers} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.data?.name} ({data?.data?.items?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.data?.items} />}
      </div>
      {/* {accordion body} */}
    </div>
  );
};

export default RestaurantCategory;
