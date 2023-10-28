import React from 'react';
import { fallbackImg } from '../utils/constant';



function FallbackPage({ text }) {
    return (
        <div className="logo-container flex items-center m-20 p-20 justify-center">
            <img src={fallbackImg} alt="MyLogo"></img>
            <div className='p-50'><h1 className='text-xl font-bold'>{text}</h1></div>
        </div>
    )
}

export default FallbackPage
