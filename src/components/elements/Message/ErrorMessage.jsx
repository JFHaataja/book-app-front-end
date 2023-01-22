import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

export default function ErrorMessage() {
    return (
        <>
            <Container>
                <Card className="d-flex justify-content-center border-0">
                    <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <Card.Title className="fw-bold display-2">
                            Oops!
                        </Card.Title>
                        <iframe
                            title="404"
                            className="vh-50"
                            src="https://embed.lottiefiles.com/animation/98119"
                        ></iframe>
                        <Card.Text className="display-5">
                            Sorry, something went wrong.
                        </Card.Text>
                        <Card.Text className="fs-5">
                            If you see this screen often, please contact the app
                            owner.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}
