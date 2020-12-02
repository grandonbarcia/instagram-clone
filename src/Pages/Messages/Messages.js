import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa'
import Virus from '../../img/virus.jpg';
const Messages = () => {

    return (
        <Row className="justify-content-md-center mt-4 h-100 ">
            <Col className="panel h-100" md={5} lg={4} xl={4}>
                <Row className="panel  justify-content-md-center pt-3 pb-3">
                    <Col className="text-right">
                        <h6>Direct</h6>
                    </Col>
                    <Col className="text-right">
                        <BsPencilSquare size={28} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-3 pb-3">
                    <Col md={2}>
                        <Image src={Virus} height={"50px"} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                grandonlee_
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Active Now
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Col>
            <Col className="panel d-flex align-items-center h-100 " md={7} lg={6} xl={6}>
                <Row className="d-flex align-items-center">
                    <Col>
                        <Row >
                            <Col className="text-center">
                                <FaRegPaperPlane size={34} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-5" md={12}><h4>Your Messages</h4>
                            </Col>
                            <Col className="text-center mt-1" md={12}>Send private photos and messages to a friend or group.
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-5" >
                                <Button> Send Message </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Messages
