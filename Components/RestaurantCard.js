const RestaurantCard = (props) =>{
    console.log(props)
    const {name,cuisines,costForTwo,avgRatingString,sla,cloudinaryImageId} = props.restData;
     return(
        <div className="rest-card">
            <img alt="rest-logo"  className="rest-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <div style={{margin:"7px 0px"}}>
            <p style={{fontWeight:"bold"}}>{name}</p>
            <p style={{fontWeight:"bold"}}>⭐ {avgRatingString} <span style={{fontWeight:"bold"}}>  🔸{sla?.slaString}</span></p>
            <br></br>
            <p style={{color:"gray"}}>{cuisines.join(', ')}</p>
            <p style={{color:"gray"}}>{costForTwo}</p>
            </div>
        </div>
     )
}

export default RestaurantCard;