import { useState } from 'react';
import Layout from 'components/layout/Main/Layout';
import BookList from 'services/BookList';
import ToastMessage from 'components/elements/Message/Toast';

function App() {

    const [toast, setToast] = useState('');
    const [showToast, setShowToast] = useState('');

    return (
        <>
            <Layout>
                {showToast && (
                    <ToastMessage toast={toast} />
                )}
                <BookList
                    setToast={setToast}
                    setShowToast={setShowToast}
                />
            </Layout>
        </>
    );
}

export default App;
