import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(MENU_API + resId);
    const data = await response.data;
    setResInfo(data);
    console.log(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
