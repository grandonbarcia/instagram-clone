import React from 'react';
import useForm from '../../Hooks/useForm'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { AiFillFacebook } from 'react-icons/ai'
import { loginUser, useAuthState, useAuthDispatch } from '../../Context'
import { Redirect } from 'react-router-dom';
import ShowError from './ShowError'
import AppleStoreButton from '../../img/apple-store.png'
import GooglePlayButton from '../../img/google-play.png'
import IPhoneWhite from '../../img/iphone-white-unfilled.png'
import IPhoneBlack from '../../img/iphone-black-filled.png'
import Post from '../../img/instagram_post_3.png'

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
                <Row className="justify-content-md-center" style={{ marginTop: '75px', height: '100%' }}>
                    <Col className="iphones" md={3} lg={3} xl={{span: '3', offset: '2'}}>
                        <Image src={IPhoneBlack} width={'auto'} height={'100%'} fluid />

                    </Col>
                    <Col className="iphones" md={3} lg={3} xl={3} style={{ marginLeft: '-200px' }}>
                        <Image src={IPhoneWhite} width={'auto'} height={'50%'} style={{ marginTop: '20px' }} fluid />
                        <Image src={Post} width={'auto'} height={'100%'} style={{ position: 'absolute', height: '72.9%', marginLeft: '-238px', marginTop: '85px' }} fluid />
                    </Col>
                    <Col md={4} lg={6} xl={6}>
                        <Row className="mb-1" style={{ height: '81%' }} >
                            <Col xs={12} md={12} xl={8} style={{ backgroundColor: '#ffffff', border: '1px solid lightgrey' }}>
                                <Row className="justify-content-md-center">
                                    <Col className=" align-self-center h-50 mt-5" md={10} xl={10} >
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
                        <Row className="align-items-center" style={{ height: '10%' }} >
                            <Col xl={8} style={{ backgroundColor: '#ffffff', border: '1px solid lightgrey', height: '75%' }}>
                                <Row className="h-100 justify-content-md-center align-items-center" >
                                    <Col className="text-center" xl={12}>
                                        Don't have an account? <span onClick={() => { return history.push('/signup') }}>Sign Up</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xl={8}className="text-center">
                                Get the app.
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={4}>
                                <Image src={AppleStoreButton} width={'100%'} height={'auto'} />
                            </Col>
                            <Col className="text-left" xl={4}>
                                <Image src={GooglePlayButton} width={'100%'} height={'auto'} />
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row style={{ marginTop: '100px', fontSize: '12px', wordSpacing: '10px', color: '#8E8E9B' }}>
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

export default Login;