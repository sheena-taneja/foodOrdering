import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import AccordianItem from "./AccordianItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Toggle from "./Toggle";
import CarouselCard from "./CarouselCard";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log("resId", resId)
    const resInfo = useRestaurantMenu(resId);
    const [filterVegRest, setFilterVegRest] = useState(false);

    if (resInfo.length == 0) return <Shimmer />

    const { name, cuisines, costForTwoMessage, locality } = resInfo?.cards[0].card?.card?.info;
    const carouselCardIndex = resInfo?.cards.length > 2 ? 1 : 0;
    const carouselCards = resInfo?.cards[carouselCardIndex]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const cards = resInfo?.cards[carouselCardIndex + 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return (
        <div className="menu p-4 m-4 border border-solid border-black mx-44 my-16">
            <h1 className="font-bold text-xl">{name}</h1>
            <p >{cuisines.join(",")}                  </p>
            <hr className=" h-2  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="flex space-x-4">
                <h2>{'🪙' + costForTwoMessage}</h2>
                <h2>{locality ? '📍' + locality : ''}</h2>
            </div>
            <Toggle text="Veg" setFilterVegRest={setFilterVegRest} filterVegRest={filterVegRest}></Toggle>
            {carouselCardIndex ? <CarouselCard cards={carouselCards}> </CarouselCard>: <></>}
            <AccordianItem cards={cards} isVeg={filterVegRest}></AccordianItem>
        </div>
    )
}

export default RestaurantMenu;