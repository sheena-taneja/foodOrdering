import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CookiesProvider, useCookies } from "react-cookie";
import { useSelector } from "react-redux";

const NavItems = () => {
    const [btnText, setBtnText] = useState("Login");
    const [cookies, setCookie] = useCookies(["user"]);
    const cartItems = useSelector((store) => store.cart.items);
    const getCartItemCount = (item) => {
        let quantity = 0;
        item.forEach(i => {
            quantity += i.card.info.quantity;
        });
        return quantity;
    }

    return (
        <div className="flex items-center">
            <ul className="flex p-8 m-8 space-x-4">
                <li className="font-bold">Online: {useOnlineStatus() ? "🟢" : "❌"}</li>
                <li className="font-bold"><Link to="/">Home</Link></li>
                <li className="font-bold"><Link to="/about" >About Us</Link></li>
                <li className="font-bold"><Link to="/contact">Contact</Link></li>
                <li className="font-bold"><Link to="/cart">Cart-{getCartItemCount(cartItems)}</Link></li>
                {/* <Link to="/login"><button className="font-bold" onClick={() => { btnText === "Login" ? setBtnText("Logout") : setBtnText("Login"); }}>{btnText}</button></Link> */}
                {cookies.user ? <li className="font-bold"><Link to="/logout">SignOut</Link></li> : <li className="font-bold"><Link to="/login">SignIn</Link></li>}

            </ul>
        </div >
    )
}

export default NavItems;
