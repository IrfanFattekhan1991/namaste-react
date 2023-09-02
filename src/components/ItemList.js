import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log("Item List", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-300 text-left"
          >
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - Rs. {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-sm px-2">{item?.card?.info?.description}</p>
            <div className="text-right">
              <button
                className="border border-gray-400 p-1 text-green-500 font-bold rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
