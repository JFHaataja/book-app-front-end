
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Book from 'assets/Icon/Book';

function NavBar() {
  return (
    <>
      <Navbar bg="white" variant="secondary" className="shadow-lg py-3">
        <Container>
          <Navbar.Brand className='fw-bold text-primary pe-2' href="#home">
            <Book/>
            Book App
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;