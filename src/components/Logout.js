import React, { useEffect } from 'react';
import { CookiesProvider, useCookies } from "react-cookie";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearCart, removeItem } from '../utils/cartSlice';

function Logout() {

    const [cookies, setCookie] = useCookies(["user"]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        if (cookies.user) {
            console.log("cookies cleared")
            setCookie("user", "", { path: "/" });
            dispatch(clearCart());
            navigate("/home")
        }
    }

    useEffect(() => {
        handleLogout()
    })
    return (
        <div>
            {/* {handleLogout} */}
        </div>
    )
}

export default Logout
