import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContentLayout(props) {
    return (
        <>
            <Container fluid className="mx-0 px-0 min-vh-100">
                <Container fluid className="m-auto py-3 bg-header">
                    <div className="w-50 pt-4 m-auto">{props.search}</div>
                </Container>
                <Container>
                    <h1 className="display-5 pt-4 pb-1 fw-bold text-dark text-center">
                        Book App
                    </h1>
                    <p className="fs-5 text-dark text-center">
                        Keep track of all of your favorite books.
                    </p>
                    <Row>
                        <Col md={5} className="mt-4">
                            {props.leftFirst}
                            {props.leftSecond}
                        </Col>
                        <Col className="my-5">
                            {props.rightFirst}
                            {props.rightSecond}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default ContentLayout;
