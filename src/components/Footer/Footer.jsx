import React from 'react'

const Footer = () => {
  return (
    <footer className="bd-footer py-4 py-md-5 mt-5 bg-dark">
        <div className='container p-4 d-flex flex-row justify-content-evenly align-items-center'>
            <div className='container p-4 d-flex flex-column justify-content-center align-items-center text-white '>
                <p className='fs-5' style={{color:"white"}}>We❤Dogs</p>
                <p className='fs-6'>Realizado con amor por: Javier Gonzalez (<a href='https://www.javier-gonzalez.me'>Revisar portafolio</a>)</p>
                <p className='fs-6'>Con los datos de <a href='https://dog.ceo/dog-api/'>Dog API</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer