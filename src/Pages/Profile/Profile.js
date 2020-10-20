import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Info from './Info';
import Posts from './Posts';


const Profile = () => {

    return (
        <Row className="justify-content-md-center">
            <Col md={12}>
                <Row>
                    <Col className="pt-5 pb-5" md={12}>
                        <Info />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Posts />
                    </Col>
                </Row>
            </Col>
        </Row>


    )


}

export default Profile;