import React from 'react'
import Searcher from '../components/searcher/Searcher'
import CarouselItem from '../components/carousel/CarouselItem'
import { Container, Row, Col } from 'react-bootstrap'

const Index = () => {
  return (
    <Container className='mt-3'>
      <Row>
          <Col xs={12}>
            <h2 className="fs-1">¡Buscador de fotos de perritos!</h2>
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
            <p className="fs-3">No necesitas mas información. Sólo hay fotos de perritos</p>
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
            <Searcher size="large"/>
          </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="fs-3 mt-3">Algunos de nuestros perritos:</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={7} className="m-auto">
          <CarouselItem/>
        </Col>
      </Row>
    </Container>
  )
}

export default Index