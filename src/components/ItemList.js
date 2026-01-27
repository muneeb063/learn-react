import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (items) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action to add item to the cart
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.items.map((item) => (
        <div
          key={item.id}
          className="p-2 m-2 border-gray-400 border-b text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.name}</span>
              <span> - Rs {item.price}</span>
            </div>
            <p className="text-xs"> This is the description of the item</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 bg-black shadow-lg rounded-lg text-white cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* <ul>
        {items.items.map((item) => (
          <li key={item.id} className="text-left border-b p-2">
            {item.name} - {item.price / 100}    
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ItemList;
