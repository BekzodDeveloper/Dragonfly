import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </Router>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

//You should understand it
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})