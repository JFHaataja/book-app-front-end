import ListGroup from 'components/elements/List/ListGroup';
import ListItem from 'components/elements/List/ListItem';


const Book = ({
    book,
    editBook,
    setAddNewMode
}) => {

    return (
<>
        <ListGroup>
             <ListItem
                onChangeHandler={() => setAddNewMode(false)}         
                clickHandler={() => editBook(book)}
                listItemText={`${book.author}: ${book.title}`}
            />
        </ListGroup>


    </>
    );

};

export default Book;