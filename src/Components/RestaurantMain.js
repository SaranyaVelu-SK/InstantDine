import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../../utils/constants";
import { useParams } from "react-router-dom";
import BodyShimmer from "./BodyShimmer";

const RestaurantMain = () => {
    const { resId } = useParams();
    console.log(resId)


    const [resData, setResData] = useState(null);

    const fetchRestaurantData = async () => {
        const data = await fetch(RESTAURANT_API + resId);
        const jsonData = await data.json();
        setResData(jsonData)

    }

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    const resItemCards = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const resDetails = resData?.data?.cards[2]?.card?.card?.info;
    if (resData === null) return <BodyShimmer />
    return (
        <div className="res-main-page">
            <h1 >{resDetails.name}</h1>
            <div>
                <p>{resDetails?.avgRatingString}</p>
                <p>{resDetails?.costForTwoMessage}</p>
                <p>{resDetails?.cuisines?.join(', ')}</p>
                <p>{resDetails?.locality}, {resDetails?.areaName}, {resDetails?.city}</p>
                <p>{resDetails?.sla?.slaString}</p>
            </div>
            <div>
                {resItemCards?.map((itemCard) => (
                    <div key={itemCard?.card?.info?.id}>
                        <h5>{itemCard?.card?.info?.name} - Rs. {itemCard?.card?.info.defaultPrice / 100}</h5>
                        <p> ⭐ {itemCard?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RestaurantMain;