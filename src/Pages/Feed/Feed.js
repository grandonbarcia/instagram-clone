import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';
import { useAuthState } from '../../Context'



const Feed = ({ history }) => {

    const user = useAuthState();
    console.log(user);
    return (
        <div className="Feed">
            <Row className="justify-content-sm-center justify-content-md-center mt-4">
                <Col className="feed" sm={10} md={10} lg={6} xl={6}>
                    <Stories history={history} />
                    <Posts />
                </Col>
                <Col className="side-bar" md={4} lg={2} xl={4}>
                    <SideBar />
                </Col>
            </Row>
        </div >
    )


}

export default Feed;