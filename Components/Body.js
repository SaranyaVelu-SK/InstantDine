
import RestaurantCard from'./RestaurantCard';
import restaurants from '../utils/data.json';
const Body = ()=>{
    // console.log(restaurants)
    return (
        <div className='body'>
            <div>
                <label htmlFor="search">Search...</label>
                <input name="search"></input>
            </div>
            <div className="rest-container">
                {
                    restaurants?.map(function(restaurant){
                        return (
                            <RestaurantCard restData={restaurant?.info} key={ restaurant?.info?.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;