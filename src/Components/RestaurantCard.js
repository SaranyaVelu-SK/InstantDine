const RestaurantCard = (props) =>{
    const {name,cuisines,costForTwo,avgRatingString,sla,cloudinaryImageId} = props.restData;
     return(
        <div className="rest-card">
            <img alt="rest-logo"  className="rest-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <div style={{margin:"7px 0px"}}>
            <p >{name}</p>
            <p >⭐ {avgRatingString} <span style={{fontWeight:"bold"}}>  🔸{sla?.slaString}</span></p>
            <br></br>
            <p style={{color:"gray"}}>{cuisines.join(', ')}</p>
            <p style={{color:"gray"}}>{costForTwo}</p>
            </div>
        </div>
     )
}

export const EnhancedRestaurantCard = (Comp) =>{
    return (
        (props) => {
            const offer = props?.restData?.aggregatedDiscountInfoV3;
            if(offer){
                return (
                    <>
                    <p className="resCard-offer">{`${offer?.header} - ${offer?.subHeader || offer?.discountTag}`}</p>
                    <Comp {...props}/>
                    </>
                )
            } 
            return <Comp {...props} />
            
        }
    )
}

export default RestaurantCard; 