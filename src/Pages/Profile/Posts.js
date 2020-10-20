import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { BsFilePost } from 'react-icons/bs'
import { CgScreen } from 'react-icons/cg'
import { GrSave } from 'react-icons/gr'
import { IoIosRibbon } from 'react-icons/io'
import Virus from '../../img/virus.jpg';
import "../../App.css";



const Posts = () => {

    let borderTop = { borderTop: "1px solid black" }
    let [tabStyle, setStyle] = useState({ borderTop: "1px solid black" })


    let switchTabs = () => {

        setStyle({ borderTop: tabStyle ? null : borderTop })

    }

    return (
        <Row style={{ borderTop: "1px solid lightgray" }}>
            <Col>
                <Row className="justify-content-md-center text-center">
                    <Col md={2}>
                        <div onClick={() => switchTabs()} className="profile-tabs">

                            <BsFilePost /> POSTS
                        </div>
                    </Col>
                    <Col md={2}>
                        <div onClick={() => switchTabs()} className="profile-tabs">
                            <CgScreen /> IGTV
                        </div>
                    </Col>
                    <Col md={2}>
                        <div onClick={() => switchTabs()} className="profile-tabs">
                            <GrSave /> SAVED
                        </div>
                    </Col>
                    <Col md={2}>
                        <div onClick={() => switchTabs()} className="profile-tabs">
                            <IoIosRibbon /> TAGGED
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center text-center">
                    <Col>
                        <Image src={Virus} width={"50%"} height={"auto"} />
                    </Col>
                    <Col>
                        <Image src={Virus} width={"50%"} height={"auto"} />
                    </Col>
                    <Col>
                        <Image src={Virus} width={"50%"} height={"auto"} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )


}

export default Posts;