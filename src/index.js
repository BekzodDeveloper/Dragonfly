import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App store={store}
                state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
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