import Spinner from 'react-bootstrap/Spinner';

function MainSpinner() {
  return (
    <Spinner variant="primary" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default MainSpinner;