import { useEffect } from 'react/cjs/react.production.min';
import RestaurantCard, { withLabelCard } from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { geolocated } from "react-geolocated";

const Body = () => {
    let [restData, setRestData] = useState([]);
    const [filterRestData, setFilterRestData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log('lat:', latitude, longitude);
                    setUserLocation({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => { getUserLocation() }, []);
    useEffect(() => { fetchData() }, [userLocation]);

    const RestaurantCardPromoted = withLabelCard(RestaurantCard);

    const fetchData = async () => {
        console.log("user loc", userLocation)
        if (userLocation.latitude && userLocation.longitude) {
            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${userLocation.latitude}&lng=${userLocation.longitude}&page_type=DESKTOP_WEB_LISTING`);
            console.log("API Data", {data})
            const json = await data.json();
            setRestData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterRestData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    }
    if (!useOnlineStatus())
        return <h1>You are offline. Please check your internet connection</h1>

    // conditional Rendering

    console.log("resData", restData)
    // console.log("filterResData", filterRestData)
    return restData.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                    <button className="px-4 py-2 bg-blue-400 m-4 rounded-lg" onClick={() => {
                        const filteredRest = restData.filter((res) => {
                            return (res?.data?.name).toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilterRestData(filteredRest)
                    }}>Search</button>
                </div>

                <div className="m-4 p-4">
                    <button className="px-4 py-2 bg-blue-400 m-4 rounded-lg" onClick={() => {
                        restData = restData.filter(res => res.info.avgRating > 4)
                        setFilterRestData(restData);
                    }}>Top Rated Restaurants</button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {filterRestData.map((singleData) => {
                    return <Link to={"/restaurants/" + singleData.info.id} key={singleData.info.id} className="resCard-link">
                        {singleData.info.promoted ? <RestaurantCardPromoted resData={singleData} /> : <RestaurantCard resData={singleData} />}

                    </Link>
                })}
            </div>
        </div >
    )
}

export default Body;