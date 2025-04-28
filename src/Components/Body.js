import React, { useMemo } from 'react';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import BodyShimmer from './BodyShimmer';


const Body = () => {

    const [restaurants,setRestaurants] = useState([]);
    const [isAllResClicked, setIsAllResClicked] = useState(true);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const finalData = await data.json();
        setRestaurants(finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const resToDisplay = useMemo(()=>{
        if(!isAllResClicked){
            return restaurants?.filter(restaurant => restaurant?.info?.avgRating > 4.3 );
        }
        return restaurants
    },[restaurants,isAllResClicked])


   useEffect(()=>{
     fetchData();
   },[])

    if(restaurants.length ===0){
        return <BodyShimmer/>
    }
    return (
        <div className='body'>
            <div className='body-sec1'>
                <div style={{ display: "flex", justifyContent: "center" ,alignItems:"center",padding:"12px",backgroundColor: "orangered",borderRadius:"5px",color:"white"}}>
                    <label htmlFor="search">SEARCH : &nbsp;&nbsp;</label>
                    <input style={{padding:"10px",border:"none",borderRadius:"2px"}} name="search" ></input>
                </div>
                <div>
                    <button className="res-filter-btn" onClick={()=>{setIsAllResClicked(false)}}>Top Rated restaurants</button>
                    <button className="res-filter-btn" onClick={()=>{setIsAllResClicked(true)}}>All restaurants</button>
                </div>
            </div>
            <div className="rest-container">
                {
                    resToDisplay?.map(function (restaurant) {
                        return (
                            <RestaurantCard restData={restaurant?.info} key={restaurant?.info?.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;