import ListGroup from 'react-bootstrap/ListGroup';
import Book from 'assets/Icon/Book';

function ListItem({clickHandler, listItemText, onChangeHandler}) {

  return (
    <>
      <ListGroup.Item
      action
      onClick={clickHandler}
      onChange={onChangeHandler}
      className="h-100 py-4 my-1 cursor-pointer text-dark shadow-sm border-1 rounded-4"
      >
        <Book/>
        {listItemText}
      </ListGroup.Item>
    </>
  );
}

export default ListItem;