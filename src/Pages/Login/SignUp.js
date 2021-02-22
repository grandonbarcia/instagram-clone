import React, { useState } from 'react';
import useForm from '../../Hooks/useForm'
import ShowError from './ShowError'
import { AiFillFacebook } from 'react-icons/ai'
import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import { signupUser, useAuthDispatch } from '../../Context'
import { Redirect } from 'react-router-dom';
import AppleStoreButton from '../../img/apple-store.png'
import GooglePlayButton from '../../img/google-play.png'

const SignUp = ({ history }) => {
    //Get dispatch method from useAuthDispatch hook
    const dispatch = useAuthDispatch() //get the dispatch method from the useDispatch custom hook

    //Get useForm hook to handle form input and local state changes 
    const { handleChange, signupInput } = useForm('signup');

    //Hold Error messages 
    const [error, setError] = useState({
        error: false,
        message: '',
    });


    //SignupUser action makes the request and handles all the neccessary state changes
    const handleSignup = async () => {

        try {
            let response = await signupUser(dispatch, signupInput)
            if (!response.isValidated) {
                setError(response);
            }
        } catch (error) {
            console.log(error)
        }

    }

    if (window.localStorage.user) {
        return (

            <Redirect to={{ pathname: '/feed' }} />
        )

    } else {
        return (
            <>
                <Row className="pt-5 justify-content-md-center">
                    <Col xs={12} md={12} xl={4} style={{ backgroundColor: '#ffffff', border: '1px solid lightgrey', paddingBottom: '25px' }} >
                        <Row className="justify-content-md-center">
                            <Col className="h-75 " md={3} xl={10}>
                                <Row className=" justify-content-md-center mb-1 mt-5">
                                    <Col style={{ fontSize: '40px', fontFamily: 'Lobster' }} className=" align-self-center text-center pb-3">
                                        Instagram-Clone
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-center mb-3" style={{ color: '#958E8E', fontWeight: '600', fontSize: '18px' }}>
                                        Sign up to see photos and videos of your friends
                                </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant={"primary"} block> <AiFillFacebook size={24} />  Log in with Facebook</Button>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center text-center mt-3 mb-3">
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
                                <Form>
                                    <Form.Group>
                                        <Form.Control name="email" value={signupInput.email} onChange={handleChange} type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Row>
                                            <Col>
                                                <Form.Control name="fName" value={signupInput.fName} onChange={handleChange} type="name" placeholder="First" />
                                            </Col>
                                            <Col>
                                                <Form.Control name="lName" value={signupInput.lName} onChange={handleChange} type="name" placeholder="Last" />
                                            </Col>
                                        </Row>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control name="username" value={signupInput.username} onChange={handleChange} type="Username" placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control name="password" value={signupInput.password} onChange={handleChange} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Row>
                                        <Col className="text-center">
                                            <ShowError error={error} />
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col className="text-center">
                                            <Button onClick={() => handleSignup()} variant="primary" type="button" block disabled={signupInput.formFilled}>
                                                Sign up
                                        </Button>
                                        </Col>
                                    </Row>

                                </Form>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ height: '20%', marginTop: '20px' }}>
                    <Col className="text-center my-auto" xl={4} style={{ backgroundColor: '#ffffff', border: '1px solid lightgrey', height: '50px' }}>
                        <Row className=" h-100 justify-content-md-center align-items-center">
                            <Col className="text-center">
                                Have an account? <span onClick={() => { return history.push('/login') }}>Login</span>
                            </Col>
                        </Row>
                    </Col>

                </Row>

                <Row className="justify-content-md-center mt-3 mb-3">
                    <Col xs={12} md={12} xl={4} className="text-center">
                        Get the app.
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="text-right" xl={3}>
                        <Image src={AppleStoreButton} width={'50%'} height={'auto'} />
                    </Col>
                    <Col className="text-left" xl={3}>
                        <Image src={GooglePlayButton} width={'50%'} height={'auto'} />
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px', marginBottom: '50px', fontSize: '12px', wordSpacing: '10px', color: '#8E8E9B' }}>
                    <Col>
                        <Row className="justify-content-md-center text-center">
                            <Col>
                                About  Blog  Jobs  Help  API  Privacy  Terms  Top  Accounts  Hastags  Locations
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center text-center" >
                            <Col>
                                Beauty
                           
                                Dance & Performance
                            
                                Fitness
                            
                                Food & Drink
                            
                                Home & Drink
                            
                                Music
                            
                                Visual Arts
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>

        )

    }

}

export default SignUp;