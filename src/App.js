import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const News = () => {
    return (<div>News</div>)
}
const Music = () => {
    return (<div>Music</div>)
}
const Settings = () => {
    return (<div>Settings</div>)
}

const App = (props) => {

    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <div className="app-body">
                    <Nav/>
                    <div className="app-content">
                        <Routes>
                            <Route exact path='/' element={<Home/>}/>
                            <Route exact path='/profile' element={
                                <Profile state={props.state.profilePage}/>}/>
                            <Route path='/dialogs'
                                   element={
                                       <Dialogs state={props.state.dialogPage}/>}/>
                            <Route exact path='/news' element={<News/>}/>
                            <Route exact path='/music' element={<Music/>}/>
                            <Route exact path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>

    );
}


export default App;
