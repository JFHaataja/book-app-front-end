import Button from 'react-bootstrap/Button';
import Edit from 'assets/Icon/Edit'

function EditButton({
    clickHandler,
    btnType,
    buttonId,
    dataCy,
    ariaLabel,
}) {
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
            <Edit/>
            Edit
        </Button>
    );
}

export default EditButton;
