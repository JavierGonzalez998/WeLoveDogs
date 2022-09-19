import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Error = () => {
    const navigate = useNavigate()
  return (
    <div className='container d-flex flex-column justify-content-evenly align-items-center vw-100 vh-100'>
        <h1 className='fs-1'>Oh, algo malo pasó aqui ☹</h1>
        <p>Pero no te preocupes, puedes volver al inicio y seguir disfrutando de los perritos</p>
        <Button onClick={() => navigate("/")} variant="dark" size="lg">Volver a inicio ❤</Button>
    </div>
  )
}

export default Error