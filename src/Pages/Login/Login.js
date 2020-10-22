import React from 'react';
import useForm from '../../Hooks/useForm'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { AiFillFacebook } from 'react-icons/ai'
import { loginUser, useAuthState, useAuthDispatch } from '../../Context'
import { Redirect } from 'react-router-dom';
import ShowError from './ShowError'

const Login = ({ history }) => {
    const dispatch = useAuthDispatch() //get the dispatch method from the useDispatch custom hook
    const user = useAuthState();
    const { handleChange, login, filled } = useForm('login');
    const handleLogin = async () => {
        try {
            //loginUser action makes the request and handles all the neccessary state changes
            let response = await loginUser(dispatch, login)
            console.log(response);
            if (response) {
                //Navigate to feed on success
                return history.push('/feed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (user.isLoggedIn) {

        return (

            <Redirect to={{ pathname: '/feed' }} />
        )



    } else {

        return (

            <>
                <Row className="h-75 justify-content-md-center pt-5">
                    <Col xs={12} md={12} xl={4} style={{ backgroundColor: '#ffffff', border: '1px solid lightgrey' }}>
                        <Row className="justify-content-md-center">
                            <Col className=" align-self-center h-50 mt-5" md={2} xl={10} >
                                <Row className=" justify-content-md-center mb-4">
                                    <Col style={{ fontSize: '40px', fontFamily: 'Lobster' }} className=" align-self-center text-center pb-3">
                                        Instagram-Clone
                                    </Col>
                                </Row>


                                <Form>
                                    <Form.Group>
                                        <Form.Control name="username" value={login.username} onChange={handleChange} type="username" placeholder="Phone number, username, or email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control name="password" value={login.password} onChange={handleChange} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <ShowError error={user} />
                                    <Row className="justify-content-md-center">
                                        <Col className="text-center">
                                            <Button onClick={handleLogin}
                                                variant="primary"
                                                type="button"
                                                disabled={filled}
                                                block>
                                                Login
                                            </Button >
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                    </Row>
                                </Form>
                                <Row className="justify-content-md-center text-center mt-3">
                                    <Col className="my-auto">
                                        <div className='' style={{ backgroundColor: 'lightgrey', height: '1px', width: '100%' }} />
                                    </Col>
                                    <Col>
                                        OR
                                    </Col>
                                    <Col className="my-auto">
                                        <div className='' style={{ backgroundColor: 'lightgrey', height: '1px', width: '100%' }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-center my-auto pt-3">
                                        <AiFillFacebook size={24} /> Log in with Facebook
                                    </Col>
                                </Row>
                                <Row className="pt-3">
                                    <Col className="text-center my-auto">
                                        Forgot your password?
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row className="justify-content-md-center pt-3" style={{ height: '10%' }}>
                    <Col className="text-center my-auto pt-3" xl={4} style={{ backgroundColor: '#ffffff', border: '1px solid lightgrey', height: '100%' }}>
                        Don't have an account? <span onClick={() => { return history.push('/signup') }}>Sign Up</span>
                    </Col>
                </Row>
            </>
        )
    }

}

export default Login;