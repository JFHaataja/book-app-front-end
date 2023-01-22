import { useState, useEffect } from 'react';
import BookService from 'api/Books';
import Book from 'services/Book';
import BookAdd from 'services/BookAdd';
import BookEdit from 'services/BookEdit';
import AddNewButton from 'components/elements/Button/AddNewButton';
import SearchBar from 'components/elements/Search/SearchBar';
import MainSpinner from 'components/elements/Spinner/Spinner';
import ContentLayout from 'components/layout/Content/ContentLayout';

const BookList = ({ setToast, setPositiveToast, setShowToast }) => {
    const [books, setBooks] = useState([]);
    const [addNewMode, setAddNewMode] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [reload, reloadNow] = useState(false);
    const [search, setSearch] = useState('');
    const [bookForEdit, setBookForEdit] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        BookService.getAll().then((data) => {
            setBooks(data);
            setLoading(false);
        });
    }, [addNewMode, reload, editMode]);

    const handleSearchInputChange = (event) => {
        setSearch(event.target.value.toLowerCase());
    };

    const editBooks = (book) => {
        setBookForEdit(book);
        setEditMode(!editMode);
        setAddNewMode(false)
    };
    

    return (
        <>
        <ContentLayout

            search={
                 (
                    <SearchBar
                        placeHolder={'Search by book name'}
                        searchValue={search}
                        onChangeHandler={handleSearchInputChange}
                        loading={loading}
                        setLoading={setLoading}
                    />
                )
            }

            leftFirst={
                  (
                    <AddNewButton
                        btnVariant={'outline-secondary'}
                        buttonText={'Add new Book'}
                        clickHandler={() => setAddNewMode(!addNewMode)}
                        loading={loading}
                        setLoading={setLoading}
                    />
                )
            }

            leftSecond={
                loading
                ?
                <div className='d-flex justify-content-center'><MainSpinner/></div>
                : 
                    books &&
                    books.map((b) => {
                        const lowerCaseName = b.title.toLowerCase();
                        if (lowerCaseName.indexOf(search) > -1) {
                            return (
                                <Book
                                    key={b.id}
                                    book={b}
                                    reloadNow={reloadNow}
                                    reload={reload}
                                    setPositiveToast={setPositiveToast}
                                    setToast={setToast}
                                    setShowToast={setShowToast}
                                    editBook={editBooks}
                                    setEditMode={setEditMode}
                                    editMode={editMode}
                                    setBookForEdit={setBookForEdit}
                                    loading={loading}
                                    setLoading={setLoading}
                                />
                                
                            );
                        } else {
                            return null;
                        }
                    })}

                rightFirst={
                    
                     addNewMode && (
                        <BookAdd
                            setAddNewMode={setAddNewMode}
                            setPositiveToast={setPositiveToast}
                            setToast={setToast}
                            setShowToast={setShowToast}
                            loading={loading}
                            setLoading={setLoading}
                        />
                    )
                }

                rightSecond={

                     editMode && !addNewMode && (
                        <BookEdit
                            setEditMode={setEditMode}
                            setPositiveToast={setPositiveToast}
                            setToast={setToast}
                            setShowToast={setShowToast}
                            bookForEdit={bookForEdit}
                            setBookForEdit={setBookForEdit}
                            loading={loading}
                            setLoading={setLoading}
                            reloadNow={reloadNow}
                            reload={reload}
                        />
                    )
                }
            />

        </>
    );
};

export default BookList;
