import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Search from 'assets/Icon/Search';

export default function SearchBar({
    placeHolder,
    searchValue,
    onChangeHandler,
}) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text className="bg-primary border-0 rounded-20 shadow-sm">
                <Search />
            </InputGroup.Text>
            <Form.Control
                type="search"
                className="me-2 rounded-20-end shadow-sm"
                aria-label="Search"
                value={searchValue}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            ></Form.Control>
        </InputGroup>
    );
}
