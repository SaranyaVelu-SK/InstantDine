import { useParams } from "react-router-dom";
import BodyShimmer from "./BodyShimmer";
import useRestaurantData from "../../utils/useRestaurantData";
import ItemCards from "./ItemCards";
import { useContext, useState } from "react";
import userContext from "../../utils/userContext";

const RestaurantMain = () => {
    const [showIndex,setShowIndex] = useState(null)
    const { resId } = useParams();
    const userName = useContext(userContext);
    const resData = useRestaurantData(resId);

    
    const resItemCards = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const resNestedItemCards =  resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category) => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    
    const resDetails = resData?.data?.cards[2]?.card?.card?.info;
    if (resData === null) return <BodyShimmer />

    return (
        <div>
            <div className="res-main-page">
            <h1 style={{color:"white"}}>{resDetails.name}</h1>
            <div>
                <p>{resDetails?.avgRatingString} ⭐ | {resDetails?.costForTwoMessage} | {resDetails?.sla?.slaString}</p>
                <p >{resDetails?.cuisines?.join(', ')}</p>
                <p> 🏨 {resDetails?.locality}, {resDetails?.areaName}</p>
                <p>👤 {userName?.loggedInUser}</p>
            </div>            
        </div>
        <div>
                {resItemCards?.map((itemCard,index) => (
                    <ItemCards key={itemCard?.card?.card?.title} data={itemCard?.card?.card} showItems={index===showIndex ? true : false} setShowIndex = {()=>{setShowIndex(index === showIndex ? null : index)}}/>
                ))}

                {resNestedItemCards?.map((items)=>(
                    items?.card?.card?.categories?.map((itemCard)=>(
                        <ItemCards key={itemCard?.categoryId} data={itemCard}/>
                    ))
                ))}
                
                     


               
            </div>
        </div>
    )
}
export default RestaurantMain;