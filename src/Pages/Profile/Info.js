import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Blank_Pic from '../../img/blank_profile.png'
import { FiSettings } from 'react-icons/fi'

const settings = ['Change Password',
    'Nametag',
    'Apps and Websites',
    'Notifications',
    'Privacy and Security',
    'Login Activity',
    'Emails fron Instagram',
    'Report a Problem',
    'Log out',
    'Cancel']

const Info = () => {

    const [show, setShow] = useState(false);



    const colStyle = {
        padding: '15px 0px 15px 0px',
        borderBottom: '1px solid lightgrey'
    }

    const listSettingOptions = settings.map((option) =>
        <Row key={option}>
            <Col style={colStyle}>
                {option}
            </Col>
        </Row>
    );

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
                            <FiSettings size={32} onClick={handleShow} />
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

            <Modal dialogClassName="modal-90w" show={show} onHide={handleClose} centered>
                <Container className="text-center">
                    {listSettingOptions}
                </Container>
            </Modal>
        </>
    )


}

export default Info;