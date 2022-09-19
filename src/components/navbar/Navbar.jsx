import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Searcher from '../searcher/Searcher';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Footer from '../Footer/Footer';

const NavbarContainer = (props) => {
    const navigate = useNavigate();
    return (
        <>
        <Navbar key="sm" bg="dark" variant='dark' expand="sm" className="position-sticky top-0 w-100" style={{zIndex: "10000"}}>
          <Container fluid>
          <Navbar.Brand onClick={(() => navigate("/"))} style={{cursor:"pointer"}}>We❤Dogs</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-"sm"`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-$"sm"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-"sm"`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-"sm"`}>
                We❤Dogs
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Searcher size="large" />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {props.children}
        <Footer/>
        </>

    )
}

export default NavbarContainer