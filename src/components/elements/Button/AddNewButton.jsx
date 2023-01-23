import Button from 'react-bootstrap/Button';
import Add from 'assets/Icon/Add';

function AddNewButton({ clickHandler, btnType, buttonId, dataCy, ariaLabel }) {
    return (
        <div className="mb-3">
            <Button
                variant="primary"
                type={btnType}
                className="me-2 rounded-pill py-2 px-3 my-2 my-md-0"
                onClick={clickHandler}
                id={buttonId}
                data-cy={dataCy}
                aria-label={ariaLabel}
            >
                <Add />
                Add New Book
            </Button>
        </div>
    );
}

export default AddNewButton;
