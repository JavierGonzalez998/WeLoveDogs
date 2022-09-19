import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { listAllBreeds } from '../../connection/listData';
import { useNavigate } from 'react-router-dom';

const Searcher = (props) => {
    const { size } = props
    const [res, setRes] = React.useState([]);
    const [input, setInput] = React.useState("");
    const navigate = useNavigate();
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await listAllBreeds()
            setRes(res)
        };

        fetchData();
    }, [])

    return (
        <Stack direction="horizontal" gap={3} className={size === "small" ? "w-25" : size === "medium" ? "w-50" : "w-100"}>
            <Form.Control list="dataBreeds" placeholder="Escriba una raza" value={input} onChange={(e) => setInput(e.target.value)} />
            <datalist id="dataBreeds">
                {res.length > 0 ? 
                res.map((value) => {
                    return(
                       <option value={value.value}/> 
                    )
                }) : null}
            </datalist>
            <Button variant="primary" onClick={() => navigate(`/dogs/${input}`)}>Buscar</Button>
        </Stack>
    )
}

export default Searcher