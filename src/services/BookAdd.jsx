import { useState } from 'react';
import BookService from 'api/Books';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'components/elements/Form/FormGroup/FormGroup';
import SaveButton from 'components/elements/Button/SaveButton';

const BookAdd = ({
    setAddNewMode,
    setPositiveToast,
    setToast,
    setShowToast,
}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            title: newTitle,
            author: newAuthor,
            description: newDescription,
        };
        BookService.create(newBook)
            .then((response) => {
                if (response.status === 200) {
                    setToast('Added new book ' + newBook.title);
                    setPositiveToast(true);
                    setShowToast(true);
                    window.scrollBy(0, -10000);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 5000);
                    setAddNewMode(false);
                }
            })
            .catch((error) => {
                setToast(error);
                setPositiveToast(false);
                setShowToast(true);
                window.scrollBy(0, -10000);
                setTimeout(() => {
                    setShowToast(false);
                }, 5000);
            });
    };

    return (
        <Container className="mt-4">
            <h2 className="text-dark mb-3">Add New Book</h2>
            <Form
                onSubmit={handleSubmit}
                className="text-dark text-start m-auto mt-3 mb-5"
            >
                <FormGroup
                    formLabelText={'Book Title'}
                    inputType="text"
                    inputValue={newTitle}
                    inputPlaceholder="Book Title"
                    onChangeHandler={({ target }) => setNewTitle(target.value)}
                    requiredOrNot={true}
                    formGroupControlId="TitleAdd"
                />
                <FormGroup
                    formLabelText={'Author'}
                    inputType="text"
                    inputValue={newAuthor}
                    inputPlaceholder="Author"
                    onChangeHandler={({ target }) => setNewAuthor(target.value)}
                    requiredOrNot={true}
                    formGroupControlId="AuthorAdd"
                />
                <FormGroup
                    formLabelText={'Description'}
                    inputType="text"
                    inputValue={newDescription}
                    inputPlaceholder="Description"
                    onChangeHandler={({ target }) =>
                        setNewDescription(target.value)
                    }
                    requiredOrNot={false}
                    formGroupControlId="DescriptionAdd"
                />
                <div className="d-flex mt-5 justify-content-end">
                    <SaveButton
                        btnVariant={'primary'}
                        btnType="submit"
                    />
                </div>
            </Form>
        </Container>
    );
};

export default BookAdd;
