import React from 'react'
import { Row, Col, Image, FormControl, Button, InputGroup } from 'react-bootstrap'
import Virus from '../../img/virus.jpg';
import SB from '../../img/sb.jpg';
import { FiHeart } from 'react-icons/fi'
import { FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa'
import '../../App.css'
const Posts = () => {
    return (
        <Row className="mt-4 mb-5" >
            <Col className="panel ">
                <Row className="pt-2 pb-2">
                    <Col className="my-auto" xs={2} md={1}>
                        <Image src={Virus} width={"100%"} height={"auto"} roundedCircle />
                    </Col>
                    <Col className="my-auto" xs={4} md={4}>
                        <h6>grandonlee_</h6>
                    </Col>
                    <Col className="my-auto text-right" >
                        <h3 className="misc-dots">...</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="p-0">
                        <Image src={SB} width={"100%"} height={"auto"} />
                    </Col>
                </Row>
                <Row className="pl-3 pr-3">
                    <Col>
                        <Row className="pt-2 pb-2">
                            <Col xs={2} md={1}>
                                <FiHeart size={28} />
                            </Col>
                            <Col xs={2} md={1}>
                                <FaRegComment size={28} />
                            </Col>
                            <Col xs={2} md={1}>
                                <FaRegPaperPlane size={28} />
                            </Col>
                            <Col className="text-right" >
                                <FaRegBookmark size={28} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="comment-section">
                                <Row>
                                    <Col>
                                        <span className='num-likes'>688 Likes</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <span className='user-name'>grandonlee_</span> Title Posts
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <span className='user-name'>grandonlee_</span>  comments
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <span className='user-name'>grandonlee_</span>  comments
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span class='date-posted'>6 minutes ago</span>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className='post-comment-row'>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Post</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>

                </Row>
            </Col>
        </Row >
    )
}

export default Posts
