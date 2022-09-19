import React from 'react'
import Card from 'react-bootstrap/Card';

const BreedCard = (props) => {
    const {url} = props
    return (
        <Card  className="ratio ratio-4x3">
            <Card.Img variant="top" src={url} />
        </Card>
    )
}

export default BreedCard