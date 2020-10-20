import React from 'react'
import Navi from '../../NavBar/NavBar';
import Login from '../Login/Login';
import Image from 'react-bootstrap/Image'
import iphone from '../../img/iphone.jpg';
import { Redirect, Route } from 'react-router-dom';
const LandingPage = () => {

    return (
        <div>


            <Redirect to={{ pathname: '/login' }} />

        </div>
    )
}

export default LandingPage
