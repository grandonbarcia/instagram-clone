import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const RANDOM_PIC = 'https://picsum.photos/v2/list?limit=10'

const Explore = () => {

    let [pics, setPics] = useState([]);

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

    }

    const getRandomPics = async () => {
        try {
            let response = await fetch(RANDOM_PIC, requestOptions)
            let data = await response.json();
            if (data) {

                setPics(data.map((pic) =>
                    <Col key={pic.id} md={4} className="mt-3">
                        <Image
                            src={pic.download_url}
                            width={"100%"}
                            height={"auto"}
                        />
                    </Col>
                ))

            }

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {

        getRandomPics();

    }, [getRandomPics]);


    return (
        <Row className="justify-content-md-center mt-5">
            <Col md={11}>
                <Row>
                    {pics}
                </Row>
            </Col>
        </Row>
    )
}

export default Explore
