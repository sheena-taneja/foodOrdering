import React, { useState, useContext } from 'react';
// import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider, useCookies } from "react-cookie";
import UserContext from '../utils/UserContext';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


function GoogleLoginModule() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [cookies, setCookie] = useCookies(["user"]);

    const data = useContext(UserContext);
    const navigate = useNavigate()
    console.log("data", { data })

    const responseGoogle = (response) => {
        if (response.credential) {
            setCookie("user", response.credential, { path: "/" });
            setLoggedIn(true);
            navigate("/home")

        }
    };

    return (
        <GoogleOAuthProvider clientId="628696433935-o4srh1qu2bppcbb99m4iccs0l9p28qcd.apps.googleusercontent.com" className='justify-center border-spacing-2 text-3xl m-30 p-30'>
            <GoogleLogin
                clientId="628696433935-o4srh1qu2bppcbb99m4iccs0l9p28qcd"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'same_host_origin'}
            />
        </GoogleOAuthProvider>

    );
}

export default GoogleLoginModule
