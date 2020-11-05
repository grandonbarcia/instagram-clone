import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import Virus from '../../img/virus.jpg';
import Blank_Pic from '../../img/blank_profile.png'

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
                                <h6>grandonlee_</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h7 style={{ color: '#BDBDBD', fontWeight: '400', fontSize: '16px' }}>Brandon Garcia</h7>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={8} style={{ color: '#BDBDBD', fontWeight: '500', fontSize: '16px' }}>Suggestions For You
                    </Col>
                    <Col md={3} style={{ fontWeight: '600' }} className="text-right">See All
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        <Row>
                            <Col md={2}>
                                <Image src={Blank_Pic} width={"90%"} height={"auto"} roundedCircle />
                            </Col>
                            <Col className="p-0" md={6}>
                                <Row style={{ fontSize: "12px", overflow: "visible", textOverflow: "clip" }}>
                                    <Col md={12}>
                                        grandonlee_
                                    </Col>
                                    <Col md={12} style={{ overflow: "visible", textOverflow: "clip" }}>
                                        followed by  grandonlee_
                                    </Col>
                                </Row>

                            </Col>
                            <Col className="follow text-right" style={{ fontSize: "12px", color: '#3AACF7', fontWeight: '700' }} md={3}>
                                Follow
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col md={2}>
                                <Image src={Blank_Pic} width={"90%"} height={"auto"} roundedCircle />
                            </Col>
                            <Col className="p-0" md={6}>
                                <Row style={{ fontSize: "12px", overflow: "visible", textOverflow: "clip" }}>
                                    <Col md={12}>
                                        grandonlee_
                                    </Col>
                                    <Col md={12} style={{ overflow: "visible", textOverflow: "clip" }}>
                                        Suggested For You
                                    </Col>
                                </Row>

                            </Col>
                            <Col className="follow text-right" style={{ fontSize: "12px", color: '#3AACF7', fontWeight: '700' }} md={3}>
                                Follow
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* footer */}
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}

export default SideBar
