import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BreedCard from '../BreedCard/BreedCard';
const BreedContainer = (props) => {
    const {data} = props
    const [arrayImg, setArrayImg] = React.useState([]);
    
    React.useEffect(() => {
        const array = []
        for (let i = 0; i < data.length; i += 3) {
            let pedazo = data.slice(i, i + 3);
            console.log(pedazo)
            array.push(pedazo)
        }
        setArrayImg(array)

    },[data])
  return (
    <Container>
        {
            arrayImg.map((item, index) => {
                return(
                    <Row key={index}>
                        {
                            item.map((item, index) => {
                                return(
                                    <Col xs={12} md={4} index={(index * (index + 10))}>
                                       <BreedCard url={item}/>  
                                    </Col>
                                )
                            })
                        }    
                    </Row>
                )
            })
        }
    </Container>
  )
}

export default BreedContainer