import React, { useState } from 'react'
import { Row, Col, Button, Image, Modal } from 'react-bootstrap'
import Virus from '../../img/virus.jpg';

const Stories = ({ history }) => {


    const [show, setShow] = useState(true)

    const style = {
        background: show ? 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' : 'none',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        paddingTop: '2.45px',
        paddingLeft: '0.9px',
        textAlign: 'center',
        margin: 'auto'
    }



    const handleShow = () => {
        setShow(false);

        history.push('/stories')

    }




    return (
        <Row className="story-panel pt-2 pb-2">

            <Col xs={3} md={3} className="text-center">
                <Row className="text-center">
                    <Col>
                        <div style={style} onClick={handleShow}  >
                            <Image src={Virus} width={"55px"} height={"55px"} roundedCircle />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        grandonlee_
                    </Col>

                </Row>

            </Col>





        </Row>
    )
}

export default Stories
