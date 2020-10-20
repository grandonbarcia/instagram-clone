import React from 'react'
import Alert from 'react-bootstrap/Alert'

const showError = ({ error }) => {

    if (error.error) {
        return (
            <Alert variant={'danger'}>{error.error}</Alert>
        )
    }

    return (null)


}

export default showError
