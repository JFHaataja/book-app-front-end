import ListGroup from 'react-bootstrap/ListGroup';
import Book from 'assets/Icon/Book';
import EditButton from 'components/elements/Button/EditButton'
import DeleteButton from 'components/elements/Button/DeleteButton'

function ListItem({ clickHandlerEditButton, clickHandlerDeleteButton, listItemText, onChangeHandler, dataCyDelete, dataCyEdit }) {
    return (
        <>
            <ListGroup.Item
                onChange={onChangeHandler}
                className="my-2 py-4 d-flex justify-content-between align-items-between align-content-between"
            >
                <div>
                    <Book />
                    {listItemText}
                </div>
                <div className="d-flex justify-content-end">
                    <EditButton clickHandler={clickHandlerEditButton} onChangeHandler={onChangeHandler} dataCyEdit={dataCyEdit}/>
                    <DeleteButton clickHandler={clickHandlerDeleteButton} onChangeHandler={onChangeHandler} dataCyDelete={dataCyDelete}/>
                </div>
            </ListGroup.Item>
        </>
    );
}

export default ListItem;
