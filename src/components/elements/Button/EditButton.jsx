import Button from 'react-bootstrap/Button';
import Edit from 'assets/Icon/Edit';

function EditButton({
    clickHandler,
    btnType,
    buttonId,
    dataCyEdit,
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
            data-cy={dataCyEdit}
            aria-label={ariaLabel}
        >
            <Edit />
            {loading ? <>Loading..</> : <>Edit</>}
        </Button>
    );
}

export default EditButton;
