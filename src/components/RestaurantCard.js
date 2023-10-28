import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
    return (
        <div className="res-card m-4 p-8 w-[250px] h-[380px] bg-gray-100 rounded-lg items-stretch hover:bg-gray-200">
            <img className="res-logo rounded-lg text-lg" src={CDN_URL + cloudinaryImageId} alt="MyLogo"></img>
            <h3 className="font-bold py-4">{name}</h3>
            <h4 className="break-words">{(cuisines.slice(0,5)).toString()}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )

}

export const withLabelCard = (RestaurantCard) => {
return (props) => {
    return (
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    )
}
}

export default RestaurantCard;