import { IMAGE_URL } from "../../utils/constants"


const ItemcardItems = ({itemData}) => {
  return (
    <div className="itemCard-item">
        <div className="itemCard-item-description">
            <p style={{fontWeight:"bold"}}>{itemData?.name}</p>
            <p style={{fontWeight:"bold"}}>₹ {itemData?.price ? itemData?.price /100 : itemData?.defaultPrice/100}</p>
            <p style={{color:"gray"}}>{itemData?.description}</p>
        </div>
        <div className="itemCard-item-image">
            <img src={IMAGE_URL + itemData?.imageId} style={{width:"130px",borderRadius:"10%",height:"130px"}} alt="foodImage"/>
        </div>
    </div>
  )
}

export default ItemcardItems