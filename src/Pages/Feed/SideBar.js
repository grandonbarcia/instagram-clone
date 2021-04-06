import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Blank_Pic from '../../img/blank_profile.png'
import SuggestionList from './SuggestionList';

const SideBar = () => {
    return (
        <Row className="ml-1 mt-2 side-bar">
            <Col>
                <Row className="mb-2">
                    <Col className="pr-0" md={3}>
                        <Image src={Blank_Pic} width={"80%"} height={"auto"} roundedCircle />
                    </Col>
                    <Col className="pl-0 my-auto">
                        <Row>
                            <Col>
                                <h6>Username</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h7 style={{ color: '#BDBDBD', fontWeight: '400', fontSize: '16px' }}>Full Name</h7>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <SuggestionList />
            </Col >
        </Row >
    )
}

export default SideBar
