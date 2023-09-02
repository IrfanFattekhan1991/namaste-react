import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import axios from "axios";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtereRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios(API_URL);
    const data = await response.data;
    setListOfRestaurants(
      data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  if (onlineStatus === false) {
    return <h1>Network issue!! Please check your internet connection.</h1>;
  }
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-50">
      <div className="filter px-6 py-6 flex justify-center">
        <input
          className="border border-solid border-black rounded-md py-1"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border mx-8 px-4 border-solid border-black bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-lg"
          onClick={() => {
            const filteredRestaurents = listOfRestaurants.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurents);
          }}
        >
          Search
        </button>
        <button
          className=" border border-solid border-black px-4 bg-blue-500  hover:bg-blue-600 text-white py-1 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className=" bg-gray-50 flex flex-wrap">
        {filtereRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant?.card?.card?.info?.id}
              to={"/restaurants/" + restaurant?.card?.card?.info?.id}
            >
              {restaurant?.card?.card?.info?.availability?.opened ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
