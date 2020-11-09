import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Blank_Pic from '../../img/blank_profile.png'
import { FiSettings } from 'react-icons/fi'

const Info = () => {

    return (
        <Row>
            <Col className="text-center" md={4}>
                <Image src={Blank_Pic} width={"150px"} height={"auto"} roundedCircle thumbnail />
            </Col>
            <Col md={8}>
                <Row className="pb-3">
                    <Col md={4}>
                        <h3>grandonlee_</h3>
                    </Col>
                    <Col md={3}>
                        <Button>Edit Profile</Button>
                    </Col>
                    <Col md={2}>
                        <FiSettings size={32} />
                    </Col>
                </Row>
                <Row className="pb-3">
                    <Col>
                        <b>640</b> posts <b>8,998</b> followers <b>3,380</b> following
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Brandon Garcia
                    <br />
                    Ethereal
                    <br />
                    SC: djruin
                    <br />
                    www.brandonleegarcia.com
                    </Col>
                </Row>
            </Col>
        </Row>
    )


}

export default Info;