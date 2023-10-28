import React, { useState, useContext } from 'react';
import { CookiesProvider, useCookies } from "react-cookie";
import UserContext from '../utils/UserContext';
import GoogleLoginModule from './GoogleLoginModule';


function Login() {
    return (
        <div className="relative flex flex-col justify-center min-h-fit mt-60 overflow-hidden">
            <div className="w-full p-6 m-auto bg-blue-100 rounded-md shadow-xl lg:max-w-xl border border-gray-600">
                <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase">
                    Sign in
                </h1>

                <div className="flex mt-4 gap-x-2">
                    <div
                        type="button"
                        className="flex items-center justify-center w-full p-2  rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-600"
                    >

                        <GoogleLoginModule></GoogleLoginModule>

                    </div>

                </div>
            </div>
        </div>



        // <div className='p-4 m-4 border border-solid border-black mx-44 my-16'>
        //     <div className='justify-between'>
        //         <h1>Sign In With Google</h1>
        //         <GoogleLoginModule></GoogleLoginModule>
        //     </div>
        // </div>
    );
}

export default Login
