import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { ConnectRandomDogs } from './connection';
import SpinnerItem from '../Spinner/SpinnerItem';

const CarouselItem = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await ConnectRandomDogs();
            setData(res);
            setIsLoading(false)
        }
        fetchData();
    }, [])

    return (
        <>
            {
               isLoading === false ?
                    <Carousel>
                        {data.map((item, index )=> {
                            return (
                                <Carousel.Item key={index} interval={2000} className="ratio ratio-4x3">
                                    <img
                                        className="d-block img-fluid"
                                        src={item}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel> : <SpinnerItem />
            }
        </>
    )
}

export default CarouselItem