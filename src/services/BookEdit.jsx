import { useState } from 'react';
import BookService from 'api/Books';
import Form from 'react-bootstrap/Form';
import FormGroup from 'components/elements/Form/FormGroup/FormGroup';
// import ReturnButton from 'components/elements/Button/ReturnButton';
import SaveButton from 'components/elements/Button/SaveButton';
import DeleteButton from 'components/elements/Button/DeleteButton';

const BookEdit = ({
    setEditMode,
    setPositiveToast,
    setToast,
    setShowToast,
    bookForEdit,
    setLoading,
    reload,
    reloadNow
    //  reload,
    //  reloadNow,
    // deleteBook,
    // book
}) => {
    const [newBookId] = useState(bookForEdit.id);
    const [newAuthor, setNewAuthor] = useState(bookForEdit.author);
    const [newTitle, setNewTitle] = useState(bookForEdit.title);
    const [newDescription, setNewDescription] = useState(bookForEdit.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            id: newBookId,
            author: newAuthor,
            title: newTitle,
            description: newDescription,
        };

        BookService.update(newBook)
            .then((response) => {
                if (response.status === 200) {
                    setToast('Edited Book: ' + newBook.title);
                    setPositiveToast(true);
                    setShowToast(true);
                    window.scrollBy(0, -10000);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 5000);
                    setEditMode(false);
                }
            })
            .catch((error) => {
                setToast(error);
                setPositiveToast(false);
                setShowToast(true);
                window.scrollBy(0, -10000);
                setTimeout(() => {
                    setShowToast(false);
                }, 6000);
            });
    };

    const deleteBook = (bookForEdit) => {
        const response = window.confirm(`Delete book ${bookForEdit.title}?`);

        if (response === true) {
            setLoading(true);
            BookService.remove(bookForEdit.id)
                .then((res) => {
                    if (res.status === 200) {
                        setLoading(false);
                        setToast(`Successfully deleted book ${bookForEdit.title}`);
                        setPositiveToast(true);
                        setShowToast(true);
                        window.scrollBy(0, -10000);

                        setTimeout(() => {
                            setShowToast(false);
                        }, 5000);
                        reloadNow(!reload);
                    }
                })
                .catch((error) => {
                    setLoading(false);                   
                    setToast(error);
                    setPositiveToast(false);
                    setShowToast(true);
                    window.scrollBy(0, -10000);

                    setTimeout(() => {
                        setShowToast(false);
                    }, 6000);
                });
        } else {
            setLoading(false);
            setToast('Book deletion cancelled successfully.');
            setPositiveToast(true);
            setShowToast(true);
            window.scrollBy(0, -10000);

            setTimeout(() => {
                setShowToast(false);
            }, 5000);
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-dark mb-3">Edit Book</h2>
            {/* <ReturnButton
                clickHandler={() => setEditMode(false)}
            /> */}
            <Form onSubmit={handleSubmit} className="text-dark text-start m-auto mt-3">
                        <FormGroup
                            formLabelText="Author"
                            inputType="text"
                            inputValue={newAuthor}
                            inputPlaceholder="Author"
                            onChangeHandler={({ target }) => setNewAuthor(target.value)}
                            requiredOrNot={true}
                            formGroupControlId="AuthorEdit"
                        />
                        <FormGroup
                            formLabelText="Book Title"
                            inputType="text"
                            inputValue={newTitle}
                            inputPlaceholder="Book Title"
                            onChangeHandler={({ target }) => setNewTitle(target.value)}
                            requiredOrNot={true}
                            formGroupControlId="TitleEdit"
                        />
                        <FormGroup
                            formLabelText="Book Description"
                            inputType="text"
                            inputValue={newDescription}
                            inputPlaceholder="Book Description"
                            onChangeHandler={({ target }) => setNewDescription(target.value)}
                            requiredOrNot={true}
                            formGroupControlId="DesctiptionEdit"
                        />
                        <div className="d-flex mt-5 justify-content-end">
                            <DeleteButton
                            clickHandler={() => deleteBook(bookForEdit)}
                            dataCy="btnDelete"
                            buttonId={`btnDelete${bookForEdit.title}`}
                            ariaLabel={`Delete Customer ${bookForEdit.title}`}
                            />
                            <SaveButton
                                btnVariant="primary"
                                btnType="submit"
                                buttonText="Confirm and Save"
                            />
                        </div>
            </Form>
        </div>
    );
};

export default BookEdit;
