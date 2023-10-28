import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
import FallbackPage from './FallbackPage';
import GenerateBill from './GenerateBill';
import BillDetails from './BillDetails';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return cartItems.length > 0 ?
        (
            <div className='m-5 p-4'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>Cart</h1>
                    <button className="px-4 py-2 bg-blue-400 m-4 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className='flex m-4'>
                    <div className='w-8/12 m-auto p-4 border border-solid border-black'>
                        <ItemList cards={cartItems}></ItemList>
                    </div>
                    <div className='w-3/12 m-auto p-4 border border-solid border-black'>
                        <BillDetails items={cartItems}></BillDetails>
                    </div>
                </div>
            </div>
        ) :
        (
            <FallbackPage text="Your Cart is Empty"></FallbackPage>
        )
}

export default Cart
