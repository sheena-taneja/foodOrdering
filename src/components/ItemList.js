import React, { useState } from 'react';
import { CookiesProvider, useCookies } from "react-cookie";
import { CDN_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

import { Link, useNavigate } from "react-router-dom";

function ItemList({ cards, isVeg }) {
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(["user"]);
    const navigate = useNavigate();

    const handleAddItem = (item) => {
        if (cookies.user) {
            item.card.info.quantity = 0;
            dispatch(addItem(item));
        } else {
            navigate("/login");
        }
    }

    const handleRemoveItem = (item) => {
        console.log()
        if (cookies.user) {
            dispatch(removeItem(item));
        } else {
            navigate("/login");
        }
    }

    const getQuantity = (item) => {
        let countItem = 0;
        const cartItems = useSelector((store) => store.cart.items);
        cartItems.forEach(cartItem => {
            if (item.card.info.id == cartItem.card.info.id) {
                countItem = cartItem.card.info.quantity;
            }
        })
        return countItem || "ADD";
    }

    return (

        isVeg ? (<>
            <div>
                <div className="divide-y-4 divide-dashed md:divide-solid"> {cards?.map((item, index2) =>
                    item.card?.info?.isVeg && <div key={index2} className="flex justify-between">
                        <div>
                        {console.log("veg con", {item})}
                            <h2 className="mt-8">{item.card.info.isVeg ? '🟩' : '🟥'}</h2>
                            <h3 className="text-xl ">{item.card.info.name}</h3>
                            {item.card.info.price ? <h2> Rs {item.card.info.price / 100}</h2> : <h2>Rs {item.card.info.defaultPrice / 100}</h2>}
                            <br />
                        </div>
                        <div>
                            {item.card.info.imageId ?
                                <div>
                                    <button className='self-center  m-2 p-2 bg-black text-white' onClick={() => handleRemoveItem(item)}>-</button>
                                    <button className=' m-2 p-2 bg-white text-black' >{getQuantity(item)}</button>
                                    <button className='self-center  m-2 p-2 bg-black text-white' onClick={() => handleAddItem(item)}>+</button>
                                    <img className="rounded-lg text-lg h-36 w-48 m-4 p-4 " src={CDN_URL + item.card.info.imageId} alt="MyLogo"></img> </div> :
                                <div className="rounded-lg text-lg h-36 w-48 m-4 p-4 bg-gray-300"></div>}
                        </div>
                    </div>
                )}
                </div>
{console.log("veg con")}
            </div>
        </>) :
            <>
                <div>
                    <div className="divide-y-4 divide-dashed md:divide-solid"> {cards?.map((item, index2) =>
                        <div key={index2} className="flex justify-between">
                            <div>
                                <h2 className="mt-8">{item.card.info.isVeg ? '🟩' : '🟥'}</h2>
                                <h3 className="text-xl ">{item.card.info.name}</h3>
                                {item.card.info.price ? <h2> Rs {item.card.info.price / 100}</h2> : <h2>Rs {item.card.info.defaultPrice / 100}</h2>}
                                <br />
                            </div>
                            <div>
                                {item.card.info.imageId ?
                                    <div>
                                        <button className='self-center  m-2 p-2 bg-black text-white' onClick={() => handleRemoveItem(item)}>-</button>
                                        <button className=' m-2 p-2 bg-white text-black' >{getQuantity(item)}</button>
                                        <button className='self-center  m-2 p-2 bg-black text-white' onClick={() => handleAddItem(item)}>+</button>
                                        <img className="rounded-lg text-lg h-36 w-48 m-4 p-4 " src={CDN_URL + item.card.info.imageId} alt="MyLogo"></img> </div> :
                                    <div className="rounded-lg text-lg h-36 w-48 m-4 p-4 bg-gray-300"></div>}
                            </div>
                        </div>
                    )}
                    </div>

                </div></>
    )
}

export default ItemList
