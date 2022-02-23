import React from 'react';
import Utama from './Component/Utama';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Edu Payment</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/Kelas">Kelas</Nav.Link>
                <Nav.Link href="/Petugas">Petugas</Nav.Link>
                <Nav.Link href="/Siswa">Siswa</Nav.Link>
                <Nav.Link href="/Spp">Spp</Nav.Link>
                <Nav.Link href="/Pembayaran">Pembayaran</Nav.Link>
                <Nav.Link href="/Tunggakan">Tunggakan</Nav.Link>
              </Nav>
            </Container>
        </Navbar> 
        <br></br>
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
