import React from 'react';
import 'assets/App.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from 'components/elements/Error/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
