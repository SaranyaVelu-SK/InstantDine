import { useState } from "react";
import ItemcardItems from "./ItemcardItems";

const ItemCards = ({ data ,showItems,setShowIndex}) => {

    

    const handleAccordion = () =>{

        setShowIndex();
       
    }
    return (
        <div className="item-card">
            <div className="item-card-header" onClick={handleAccordion}>
                <p>{data?.title} ({data?.itemCards.length})</p>
                <p>🔽</p>
            </div>
            {showItems && <div>
                {data?.itemCards?.map((item,index) =>
                <ItemcardItems key={item?.card?.info?.id} itemData ={item?.card?.info}/>)}
            </div>}
        </div>

    )

}
export default ItemCards;