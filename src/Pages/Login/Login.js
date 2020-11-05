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
    //Get the dispatch method from the useDispatch custom hook
    const dispatch = useAuthDispatch()
    const user = useAuthState();

    //Get handleChange method to save state from form to loginInput and isFilled from the useForm custom hook
    const { handleChange, loginInput, isFilled } = useForm('login');

    const handleLogin = async () => {
        try {
            //LoginUser action makes the request and handles all the neccessary state changes
            let response = await loginUser(dispatch, loginInput)
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
                <Row className="justify-content-md-center pt-5" style={{ height: '85%' }}>
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
                                        <Form.Control name="username" value={loginInput.username} onChange={handleChange} type="username" placeholder="Phone number, username, or email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control name="password" value={loginInput.password} onChange={handleChange} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <ShowError error={user} />
                                    <Row className="justify-content-md-center">
                                        <Col className="text-center">
                                            <Button onClick={handleLogin}
                                                variant="primary"
                                                type="button"
                                                disabled={isFilled}
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
                                    <Col className="text-center">
                                        Forgot your password?
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row className="justify-content-md-center align-items-center mt-3" style={{ height: '15%' }}>
                    <Col className="mx-auto" xl={4} style={{ backgroundColor: '#ffffff', border: '1px solid lightgrey', height: '75%' }}>
                        <Row className="h-100 justify-content-md-center align-items-center" >
                            <Col className="text-center" xl={12}>
                                Don't have an account? <span onClick={() => { return history.push('/signup') }}>Sign Up</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }

}

export default Login;