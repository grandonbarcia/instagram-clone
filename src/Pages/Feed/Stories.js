import React, { useState } from 'react'
import { Row, Col, Button, Image, Modal } from 'react-bootstrap'
import Virus from '../../img/virus.jpg';
import Teddy from '../../img/teddy.jpg';
import Martin from '../../img/mlk.jpg';
import Isaac from '../../img/newton.jpg';
import Albert from '../../img/einstein.jpg';
import Abe from '../../img/abe.jpg';
import Rosa from '../../img/rosa.jpg';
import { IoIosArrowDropleft } from 'react-icons/io'
import { IoIosArrowDropright } from 'react-icons/io'
const Stories = ({ history }) => {


    const [show, setShow] = useState(true)

    const colorfulBG = {
        background: show ? 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' : 'none',
        width: '62px',
        height: '62px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    const whiteBG = {
        backgroundColor: '#ffffff',
        width: '93%',
        height: '93%',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    const pic = {
        backgroundImage: `url(${Teddy})`,
        backgroundRepeat: 'no-reapeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '92%',
        height: '92%',
        borderRadius: '50%',
    }

    const users = [Teddy, Martin, Isaac, Albert, Rosa, Abe];


    const listUsers = users.map((user, i) =>

        <Col xl={2} key={i}>
            <div style={colorfulBG}>
                <div style={whiteBG}>
                    <div style={{ ...pic, backgroundImage: `url(${user})` }}>
                    </div>
                </div>
            </div>
        </Col>

    )



    // const handleShow = () => {
    //     setShow(false);
    //     history.push('/stories')

    // }




    return (
        <Row className="story-panel pt-2 pb-2">
            <Col className='my-auto' xl={1}>
                <IoIosArrowDropleft size={25} />
            </Col>
            <Col xl={10}>
                <Row>
                    {listUsers}
                </Row>
            </Col>
            <Col className='my-auto' xl={1}>
                <IoIosArrowDropright size={25} />
            </Col>
        </Row >
    )
}

export default Stories
