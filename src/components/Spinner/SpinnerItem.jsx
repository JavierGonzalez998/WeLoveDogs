import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const SpinnerItem = () => {
    return (
        <div className='container w-100 d-flex flex-column justify-content-center align-items-center'>
            <Spinner animation="border" role="status" variant='primary'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerItem