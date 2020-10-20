import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormControl, Button, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Virus from '../img/virus.jpg';
import { BsHouseDoor, BsBookmark } from 'react-icons/bs'
import { FaRegPaperPlane } from 'react-icons/fa'
import { ImCompass2 } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { BsHeart } from 'react-icons/bs'
import { useAuthDispatch, logout, useAuthState } from '../Context'




const Navi = ({ history, location }) => {
    // Read dispatch method from context
    const dispatch = useAuthDispatch()

    // Read user details from context
    const userDetails = useAuthState()

    const handleLogout = () => {

        // Call the logout action
        logout(dispatch)

        // Navigate to logout page on logout
        history.push('/login')

    }

    const style = {
        display: location.pathname == '/stories' ? 'none' : 'inherit',
        borderBottom: '1px solid lightgray',
        backgroundColor: '#FFFFFF'
    }

    console.log(location.pathname);

    if (window.localStorage.user) {
        return (

            <Navbar variant="light" style={style}>
                <Container fluid>
                    <Row className="justify-content-md-center navbar-row " >
                        <Col xl={6}>
                            <Row className="justify-content-md-center">
                                <Col className="text-left" xs={4} md={4} lg={4} xl={4}>
                                    <Navbar.Brand className="brand-name">Instagram</Navbar.Brand>
                                </Col>
                                <Col className="search-bar" md={4} lg={4} xl={4} >
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="" />
                                    </Form>
                                </Col>
                                <Col xs={8} md={4} lg={4} xl={4}>
                                    {
                                        window.localStorage.user
                                            ?
                                            <Nav className="justify-content-end">
                                                <Nav.Link as={Link} to="/Feed" ><BsHouseDoor size={25} /></Nav.Link>
                                                <Nav.Link as={Link} to="/messages"><FaRegPaperPlane size={25} /></Nav.Link>
                                                <Nav.Link as={Link} to="/explore"><ImCompass2 size={25} /></Nav.Link>
                                                <Nav.Link as={Link} to="/"><BsHeart size={25} /></Nav.Link>
                                                <NavDropdown alignRight title={<Image src={Virus} width={"35px"} height={"35px"} roundedCircle />}>
                                                    <NavDropdown.Item as={Link} to="/profile" ><CgProfile className="mr-2" />Profile</NavDropdown.Item>
                                                    <NavDropdown.Item><BsBookmark className="mr-2" />Saved</NavDropdown.Item>
                                                    <NavDropdown.Item><FiSettings className="mr-2" />Settings</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item onClick={() => handleLogout()}>Log Out</NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                            :
                                            <Nav className="justify-content-end">
                                                <Button className="mr-1" as={Link} to="/login" variant="primary">Login</Button>
                                                <Button as={Link} to="/signup" variant="light">Sign Up</Button>

                                            </Nav>
                                    }

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Navbar >
        )

    } else {
        return <> </>
    }



}

export default Navi; 