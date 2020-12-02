import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Suggestion from './Suggestions';

const SuggestionList = () => {

    const title = { color: '#BDBDBD', fontWeight: '500', fontSize: '16px' }
    const sub__title = { fontWeight: '600' }





    // const users = [Teddy, Martin, Isaac, Albert, Rosa, Abe];
    return (
        <>
            <Row className="mb-3">
                <Col md={8} style={title}>
                    Suggestions For You
                 </Col>
                <Col md={3} style={sub__title} className="text-right">
                    See All
                </Col>
            </Row>
            <Suggestion />
        </>

    )
}

export default SuggestionList
