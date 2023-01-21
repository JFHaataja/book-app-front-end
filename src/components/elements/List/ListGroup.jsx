import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupMain(props) {

  return (
    <>
    <ListGroup onClick={props.clickHandler}>
        {props.children}
    </ListGroup>
    </>
  );
}

export default ListGroupMain;