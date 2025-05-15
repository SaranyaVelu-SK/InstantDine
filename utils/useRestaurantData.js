import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useRestaurantData = (resId) =>{
 const [resData, setResData] = useState(null);
 useEffect(() => {
        fetchRestaurantData();
    }, [])

    const fetchRestaurantData = async () => {
        const data = await fetch(RESTAURANT_API + resId);
        const jsonData = await data.json();
        setResData(jsonData)

    }
    return resData;
}

export default useRestaurantData;