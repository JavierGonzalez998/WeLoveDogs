import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getDogBreed } from '../connection/getBreed';
import { Container, Row, Col } from 'react-bootstrap';
import BreedContainer from '../components/Breed/BreedContainer/BreedContainer';
import { Camelize } from '../utils/utils';
import SpinnerItem from '../components/Spinner/SpinnerItem';
const Dogs = () => {
    const {breed} = useParams();
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true)
            const res = await getDogBreed(breed);
            if(res !== false){
                setData(res);
            }else{
                navigate("/404")
            }

        }

        fetchData();
    },[breed])

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
        <Container>
            <Row>
                <Col>
                    <h3 className='fs-3 text-center my-3'>{Camelize(breed)}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    {isLoading ? <SpinnerItem/> : <BreedContainer data={data}/>}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Dogs