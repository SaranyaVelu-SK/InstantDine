import RestaurantShimmer from "./RestaurantShimmer";

const BodyShimmer = () => {
    console.log("heyyyyyyyyyyyyy")
    return (
        <div>
            <div style={{margin:"20px 7px",backgroundColor:"#f0f0f0",height:"100px",borderRadius:"10px"}}></div>
            <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
                <RestaurantShimmer/>
            </div>
        </div>
    )
}

export default BodyShimmer;