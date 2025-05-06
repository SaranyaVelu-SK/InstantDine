import React, { useMemo } from 'react';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import BodyShimmer from './BodyShimmer';


const Body = () => {

    const [restaurants,setRestaurants] = useState([]);
    const [isAllResClicked, setIsAllResClicked] = useState(true);
    const [searchKey, setSearchKey] = useState("");
    const [isSearched,setIsSearched] = useState(false);

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

    const finalizedRestaurants = isSearched ? resToDisplay.filter((res)=> res.info.name.toLowerCase().includes(searchKey.toLowerCase())) : resToDisplay;

   useEffect(()=>{
     fetchData();
   },[])

   const handleSearch = (e) =>{
    console.log("searching")
    setIsSearched(true);
   }

    if(restaurants.length ===0){
        return <BodyShimmer/>
    }
    return (
        <div className='body'>
            <div className='body-sec1'>
                <div style={{ display: "flex", justifyContent: "center" ,alignItems:"center",padding:"6px",backgroundColor: "orangered",borderRadius:"5px",color:"rgb(240,240,240"}}>
                    
                    <input style={{padding:"10px",border:"none",borderRadius:"2px"}} name="search" value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}}></input>
                    <button style={{padding:"10px",border:"none",borderRadius:"2px",marginLeft:"5px"}} onClick={handleSearch}>SEARCH</button>
                </div>
                <div>
                    <button className="res-filter-btn" onClick={()=>{setIsAllResClicked(false);setIsSearched(false)}}>Top Rated restaurants</button>
                    <button className="res-filter-btn" onClick={()=>{setIsAllResClicked(true);setIsSearched(false)}}>All restaurants</button>
                </div>
            </div>
            <div className="rest-container">
                {
                    finalizedRestaurants?.map(function (restaurant) {
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