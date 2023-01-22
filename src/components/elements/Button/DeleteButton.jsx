import Button from 'react-bootstrap/Button';
import Delete from 'assets/Icon/Delete';

function DeleteButton({
    clickHandler,
    btnType,
    buttonId,
    dataCy,
    ariaLabel,
    loading,
}) {
    return (
        <Button
            variant="outline-primary"
            type={btnType}
            className="me-2 rounded-pill py-2 px-3 my-2 my-md-0"
            onClick={clickHandler}
            id={buttonId}
            data-cy={dataCy}
            aria-label={ariaLabel}
        >
            <Delete />
            {loading ? <>Loading..</> : <>Delete</>}
        </Button>
    );
}

export default DeleteButton;
