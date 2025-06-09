import React, { useMemo } from 'react';
import RestaurantCard , {EnhancedRestaurantCard} from './RestaurantCard';
import { useState, useEffect } from 'react';
import BodyShimmer from './BodyShimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';


const Body = () => {

    const [restaurants,setRestaurants] = useState([]);
    const [isAllResClicked, setIsAllResClicked] = useState(true);
    const [searchKey, setSearchKey] = useState("");
    const [isSearched,setIsSearched] = useState(false);
    const onlineStatus =useOnlineStatus();

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

    if(!onlineStatus) return <h1 style ={{textAlign:"center"}}>Looking like you're Offline</h1>
    if(restaurants.length ===0){
        return <BodyShimmer/>
    }

    const OfferedRestaurantcard = EnhancedRestaurantCard(RestaurantCard);
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
                            <Link to = {'/restaurant/'+restaurant?.info?.id} key={restaurant?.info?.id} style={{ textDecoration: 'none', color: 'inherit' }} >
                                <OfferedRestaurantcard restData={restaurant?.info} />
                                </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;