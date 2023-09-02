import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log("restaurant Category", data);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" w-6/12 mx-auto my-4 px-4 py-4  bg-gray-100  shadow-lg">
        <div
          className="flex justify-between font-bold cursor-pointer"
          onClick={handleClick}
        >
          {data.title} ({data.itemCards.length})<p>⬇️</p>
        </div>
        <div>{showItems && <ItemList items={data?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
