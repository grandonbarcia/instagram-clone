import React from 'react';

//Public Routes
import LandingPage from '../Pages/LandingPage/LandingPage';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp'
import NotFound from '../Pages/NotFound/NotFound';
import Profile from '../Pages/Profile/Profile';

//Private Routes
import Feed from '../Pages/Feed/Feed';
import Explore from '../Pages/Explore/Explore';
import Messages from '../Pages/Messages/Messages';
import Stories from '../Pages/Stories/Stories'



const routes = [
    {
        path: "/",
        exact: true,
        component: Login,
        isProteced: false
    },
    {
        path: "/login",
        exact: true,
        component: Login,
        isProtected: false
    },
    {
        path: "/signUp",
        component: SignUp,
        isProtected: false,
    },
    {
        path: "/Profile",
        component: Profile,
        isProteced: false
    },
    {
        path: "/feed",
        component: Feed,
        isProtected: true
    },
    {
        path: "/explore",
        component: Explore,
        isProtected: true
    },
    {
        path: "/messages",
        component: Messages,
        isProtected: true
    },
    {
        path: "/stories",
        component: Stories,
        isProtected: true,
    },
    {
        path: "*",
        component: NotFound,
        isProtected: false
    }

]

export default routes;