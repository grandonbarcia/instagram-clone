import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'

const useAlert = () => {
    let [error, setError] = useState({
        error: 'lol',
        message: '',
    })

    let showError = () => {
        if (error)
            return <Alert variant={'danger'}>Alert</Alert>
    }

    return { error, setError, showError }

}


export default useAlert;
