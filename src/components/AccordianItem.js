import React, { useState } from 'react';
import Accordion from "./Accordian";
import ItemList from './ItemList';

function AccordianItem({ cards, isVeg }) {

    const [showIndex, setShowIndex] = useState(1);
    const getCount = (itemCards) => {
        if (!isVeg)
            return itemCards.length
        else {
            const data = itemCards.filter(item =>
                item.card.info.isVeg == 1
            )
            return data.length;
        }
    }

    return (
        <div>
            {cards?.map((card, index) => {
                const { itemCards } = card?.card?.card;
                const { title } = card?.card?.card;
                return itemCards && title ? (<>
                    <div key={index}>
                        <Accordion title={title} count={getCount(itemCards)} showItem={index == showIndex ? true : false} setShowIndex={(index) => setShowIndex(index)} index={index} >
                            <ItemList className="divide-y-4 divide-dashed md:divide-solid" cards={itemCards} isVeg={isVeg} />
                        </Accordion >
                    </div></>)
                    :
                    <></>
            })}
        </div >
    )
}

export default AccordianItem
