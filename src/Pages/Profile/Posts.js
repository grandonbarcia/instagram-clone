import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { BsFilePost } from 'react-icons/bs'
import { CgScreen } from 'react-icons/cg'
import { GrSave } from 'react-icons/gr'
import { IoIosRibbon } from 'react-icons/io'
import Blank_Pic from '../../img/blank_profile.png'
import "../../App.css";



const Posts = () => {



    return (
        <Row className="justify-content-md-center">
            <Col xl={10} style={{ borderTop: "1px solid lightgray" }}>
                <Row className="justify-content-md-center text-center">
                    <Col md={2}>
                        <BsFilePost /> POSTS
                    </Col>
                    <Col md={2}>
                        <CgScreen /> IGTV
                    </Col>
                    <Col md={2}>
                        <GrSave /> SAVED
                    </Col>
                    <Col md={2}>
                        <IoIosRibbon /> TAGGED
                    </Col>
                </Row>
                <Row className="justify-content-md-center text-center mt-5">
                    <Col>
                        <Image src={Blank_Pic} width={"50%"} height={"auto"} />
                    </Col>
                    <Col>
                        <Image src={Blank_Pic} width={"50%"} height={"auto"} />
                    </Col>
                    <Col>
                        <Image src={Blank_Pic} width={"50%"} height={"auto"} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )


}

export default Posts;