import BookService from 'api/Books';
import ListGroup from 'components/elements/List/ListGroup';
import ListItem from 'components/elements/List/ListItem';

const Book = ({ book, editBook, setAddNewMode, setToast, setShowToast, reload, reloadNow }) => {

    const deleteBook = (book) => {
        const response = window.confirm(
            `Are you sure you want to delete ${book.title}?`
        );

        if (response) {
            BookService.remove(book.id)
                .then((res) => {
                    if (res.status === 200) {
                        setToast(`Successfully deleted ${book.title}`);
                        setShowToast(true);
                        window.scrollBy(0, -10000);
                        setTimeout(() => {
                            setShowToast(false);
                        }, 5000);
                        reloadNow(!reload);

                    }
                })
                .catch((error) => {
                    setToast(error.toString());
                    setShowToast(true);
                    window.scrollBy(0, -10000);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 3000);
                });
        } else {
            setToast('Book deletion cancelled successfully.');
            setShowToast(true);
            window.scrollBy(0, -10000);

            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    };

    return (
        <>
            <ListGroup>
                <ListItem
                    onChangeHandler={() => setAddNewMode(false)}
                    clickHandlerEditButton={() => editBook(book)}
                    clickHandlerDeleteButton={() => deleteBook(book)}
                    dataCyDelete={`${book.title}_delete`}
                    dataCyEdit={`${book.title}_edit`}
                    listItemText={`${book.author}: ${book.title}`}
                />
            </ListGroup>
        </>
    );
};

export default Book;
