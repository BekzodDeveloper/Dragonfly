import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

// let rerenderEntireTree = (state) => {
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);
// }
// rerenderEntireTree(store.getState());

//You should understand it - I got it ,)
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// })