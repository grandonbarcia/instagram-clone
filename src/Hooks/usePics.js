import React, { useState, useEffect } from 'react';
import { Col, Image } from 'react-bootstrap';

const RANDOM_PIC = 'https://picsum.photos/v2/list'

const usePics = async () => {

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
                    <Col className="mt-3">
                        <Image
                            src={pic.download_url}
                            width={"300px"}
                            height={"auto"}
                        />
                    </Col>
                ))
                console.log(data);
            }

        } catch (error) {
            console.log(error)
        }

    }


    return { pics, getRandomPics };
}

export default usePics