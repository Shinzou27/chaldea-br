import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsFacebook, BsTwitter, BsDiscord } from 'react-icons/bs'

import logo from '../../assets/logo.png';


function NavBar() {
  return (
    <Navbar fixed='top' bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} width={64} alt="Logo"/></Navbar.Brand>
        <Navbar.Text className='fs-2 me-4 text-light fw-light'>
          Chaldea BR
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-5">
            <Nav.Link className='px-3' href="/">Início</Nav.Link>
            <Nav.Link className='px-3' href="/andamento">Andamento</Nav.Link>
            <Nav.Link href="https://shinzou27.github.io/glossarioChaldeaBR/" target='_blank'>Glossário</Nav.Link>
            {/*<Nav.Link className='px-3' href="/roadmap">Roadmap</Nav.Link>*/}
            <NavDropdown menuVariant='dark' className='text-bg-dark px-3' title="Capítulos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/capitulo/1">Observer on Timeless Temple</NavDropdown.Item>
              <NavDropdown.Item href="/capitulo/eor">Epic of Remnant</NavDropdown.Item>
              <NavDropdown.Item href="/capitulo/2">Cosmos in the Lostbelt</NavDropdown.Item>
              <NavDropdown.Item href="/capitulo/ordealcall">Ordeal Call</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/capitulo/eventos">Eventos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='px-3' href="/tutorial">Como Instalar</Nav.Link>
          </Nav>
          <Nav className="ms-auto fs-5">
            <Nav.Link href="https://www.facebook.com/ChaldeaBR" target='_blank'><BsFacebook className='fs-2 mx-1'/></Nav.Link>
            <Nav.Link href="https://twitter.com/fate_works" target='_blank'><BsTwitter className='fs-2 mx-1'/></Nav.Link>
            <Nav.Link href="https://discord.gg/PqjHunU9PX" target='_blank'><BsDiscord className='fs-2 mx-1'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;