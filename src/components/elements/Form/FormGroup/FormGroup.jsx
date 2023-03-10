import 'assets/App.scss';
import Form from 'react-bootstrap/Form';

function FormGroup({
    formLabelText,
    inputValue,
    inputType,
    inputPlaceholder,
    inputMaxLength,
    inputMinLength,
    onChangeHandler,
    requiredOrNot,
    formGroupControlId,
}) {
    return (
        <>
            <Form.Group className="mb-3" controlId={formGroupControlId}>
                <Form.Label>{formLabelText}</Form.Label>
                <Form.Control
                    type={inputType}
                    required={requiredOrNot}
                    defaultValue={inputValue}
                    placeholder={inputPlaceholder}
                    maxLength={inputMaxLength}
                    minLength={inputMinLength}
                    onChange={onChangeHandler}
                    className="rounded-4"
                />
            </Form.Group>
        </>
    );
}

export default FormGroup;
