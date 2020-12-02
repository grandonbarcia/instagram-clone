import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Blank_Pic from '../../img/blank_profile.png'

const Suggestions = () => {

    const title = { fontSize: "12px", overflow: "visible", textOverflow: "clip" }
    const sub__title = { overflow: "visible", textOverflow: "clip" }
    const follow_btn = { fontSize: "12px", color: '#3AACF7', fontWeight: '700' }

    return (
        <Row className="mb-2">
            <Col>
                <Row>
                    <Col md={2}>
                        <Image src={Blank_Pic} width={"90%"} height={"auto"} roundedCircle />
                    </Col>
                    <Col className="p-0" md={6}>
                        <Row style={title}>
                            <Col md={12}>
                                grandonlee_
                            </Col>
                            <Col md={12} style={sub__title}>
                                followed by  grandonlee_
                             </Col>
                        </Row>

                    </Col>
                    <Col className="follow text-right" style={follow_btn} md={3}>
                        Follow
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Suggestions
