const ItemList = (items) => {
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
              <button className="p-2 bg-black shadow-lg rounded-lg text-white   ">
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
