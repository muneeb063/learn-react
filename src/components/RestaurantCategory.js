import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
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
            {data?.name} ({data?.items?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data?.items} />}
      </div>
      {/* {accordion body} */}
    </div>
  );
};

export default RestaurantCategory;
