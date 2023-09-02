import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    id,
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    sla,
    cloudinaryImageId,
  } = resData?.card?.card?.info;

  return (
    <div className="res-card w-72 px-2 py-2 mx-4 my-2 border border-solid rounded-lg hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" py-2 font-bold text-lg">{name}</h3>
      <h4 className="break-all">{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwoMessage}</h4>
    </div>
  );
};

//Higher Component with promoted label on top of it

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute pl-2 m-2 p-1 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
