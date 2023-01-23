import { useState } from 'react';
import 'assets/App.scss';
import Toast from 'react-bootstrap/Toast';

const ToastMessage = (props) => {
    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast);

    return (
        <Toast
            className="position-absolute ms-lg-4 mt-3"
            show={showToast}
            onClose={toggleShowToast}
        >
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">Book App</strong>
                <small>Just now</small>
            </Toast.Header>
            <Toast.Body>{props.toast}</Toast.Body>
        </Toast>
    );
};

export default ToastMessage;
