import { useState } from 'react';
import Layout from 'components/layout/Main/Layout';
import BookList from 'services/BookList';
import ToastMessage from 'components/elements/Message/Toast';

function App() {
    const [toast, setToast] = useState('');
    const [positiveToast, setPositiveToast] = useState(true);
    const [showToast, setShowToast] = useState('');

    return (
        <>
            <Layout>
                {showToast && (
                    <ToastMessage toast={toast} positiveToast={positiveToast} />
                )}
                <BookList
                    setToast={setToast}
                    setPositiveToast={setPositiveToast}
                    setShowToast={setShowToast}
                />
            </Layout>
        </>
    );
}

export default App;
