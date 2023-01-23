import Button from 'react-bootstrap/Button';
import MdSave from 'assets/Icon/Save';

function SaveButton({
    clickHandler,
    btnType,
    buttonId,
    dataCy,
    ariaLabel,
    loading,
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
            <MdSave />
            {loading ? <>Loading..</> : <>Save</>}
        </Button>
    );
}

export default SaveButton;
