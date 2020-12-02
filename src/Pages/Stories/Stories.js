import React, { useState } from 'react'
import { Row, Col, Image, Modal } from 'react-bootstrap'
import Virus from '../../img/virus.jpg';
import Keyboard from '../../img/keyboard1.jpg'
import Keyboard2 from '../../img/keyboard2.jpg'
import Keyboard3 from '../../img/keyblade3.png'
import { useSpring, animated as a } from 'react-spring'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
const Stories = () => {




    const size = 32;

    const [deg, setDeg] = useState(0);
    const [op, setOp] = useState(true);
    const [num, setNum] = useState(0);

    const { transform, opacity, position, config } = useSpring({

        position: 'absolute',

        opacity: '1',
        transform: `perspective(600px) rotateY(${deg}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const handleRightArrow = () => {
        setDeg((num) => num + 180);
        setNum((num) => num + 1);
    }

    const handleLeftArrow = () => {
        setDeg((num) => num - 180);
        setNum((num) => num - 1);

    }

    const pics = [
        <Image src={Keyboard} width={'100%'} height={'100%'} />,
        <Image src={Keyboard2} width={'100%'} height={'100%'} />,
        <Image src={Keyboard3} width={'100%'} height={'100%'} />]



    return (
        <Row className="justify-content-md-center h-75">
            <Col className=" my-auto text-right">
                <BiLeftArrowCircle size={size} onClick={handleLeftArrow} />
            </Col>
            <Col md={6}>
                <Row>
                    <Col md={2}>
                        <Image src={Virus} width={"55px"} height={"55px"} roundedCircle />
                    </Col>
                    <Col className="my-auto">
                        grandonlee_
                    </Col>
                    <Col md={3} className="my-auto">
                        Paused
                    </Col>
                    <Col md={2} className="my-auto text-right">
                        ...
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Loading Bar
                    </Col>
                </Row>
                <Row className="h-100">
                    <Col className="my-auto text-center">
                        {pics.map((pic, i) => {
                            if (i == num) {
                                return <a.div style={{ transform, opacity: '1', position, config }}>{pic}</a.div>
                            } else {
                                return <a.div style={{ transform, opacity: '0', position, config }}>{pic}</a.div>
                            }
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Loading Bar
                    </Col>
                </Row>
            </Col>
            <Col className="my-auto">
                <BiRightArrowCircle size={size} onClick={handleRightArrow} />
            </Col>
        </Row >
    )
}

export default Stories

//262626

