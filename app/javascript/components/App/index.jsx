import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../../store';
import { setCurrentUser } from '../../actions/auth';
import Routes from './Routes';

export const refreshPage = () => {
    if (localStorage.currentUser) {
        store.dispatch(setCurrentUser(JSON.parse(localStorage.currentUser)));
    }
};

refreshPage();

const App = () => {
    return (
        <Provider store={store}>
            <ToastContainer hideProgressBar />
            <Routes />
        </Provider>
    );
};

export default App;
