import ListGroup from 'react-bootstrap/ListGroup';
import Book from 'assets/Icon/Book';

function ListItem({ clickHandler, listItemText, onChangeHandler, className }) {
    return (
        <>
            <ListGroup.Item
                action
                onClick={clickHandler}
                onChange={onChangeHandler}
                className="my-2 py-4"
            >
                <Book />
                {listItemText}
            </ListGroup.Item>
        </>
    );
}

export default ListItem;
