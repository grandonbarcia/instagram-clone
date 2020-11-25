import React from 'react';
import Navi from '../NavBar/NavBar'
import Container from 'react-bootstrap/Container'
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from '../Context';

const AppRoutes = ({ component: Component, path, isProtected, ...rest }) => {
    const userDetails = useAuthState();
    return (
        <Route
            path={path}
            render={(props) =>
                isProtected && !Boolean(userDetails.id) ? (
                    <Redirect to={{ pathname: '/login' }} />
                ) : (
                        <>
                            <Navi {...props} />
                            <Container fluid={'xl'}>
                                <Component {...props} />
                            </Container>
                        </>
                    )
            }
            {...rest}
        />
    );
};

export default AppRoutes;