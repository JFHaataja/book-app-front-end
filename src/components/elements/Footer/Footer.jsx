import Container from 'react-bootstrap/Container';
import Book from 'assets/Icon/Book';

function Footer() {
    
    const today = new Date();

    return (
        <>
            <Container fluid className="bg-dark py-4 bottom-0">
                <h3 className="d-flex justify-content-center text-center fs-6 text-white">
                    <span className="me-1">
                        &copy;
                    </span>
                    <span className="me-1">
                        {today.getFullYear()}
                    </span>
                    <Book />
                    Book App
                </h3>
            </Container>
        </>
    );
}

export default Footer;
