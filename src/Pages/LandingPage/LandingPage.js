import React from 'react'
import { Redirect } from 'react-router-dom';
const LandingPage = () => {

    return (
        <div>


            <Redirect to={{ pathname: '/login' }} />

        </div>
    )
}

export default LandingPage
