import Button from 'react-bootstrap/Button';
import ArrowBack from 'assets/Icon/ArrowBack';

function ReturnButton({ clickHandler, buttonId, dataCy, ariaLabel, btnType }) {
    return (
        <Button
            variant="primary"
            type={btnType}
            className="me-2 rounded-pill py-2 px-3 my-2 my-md-0"
            onClick={clickHandler}
            id={buttonId}
            data-cy={dataCy}
            aria-label={ariaLabel}
        >
            <ArrowBack />
            Go Back
        </Button>
    );
}

export default ReturnButton;
