import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;

const News = () => {
    return (<div>News</div>)
}
const Music = () => {
    return (<div>Music</div>)
}
const Settings = () => {
    return (<div>Settings</div>)
}

const App = () => {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <div className="app-body">
                    <Nav/>
                    <div className="app-content">
                        <Routes>
                            <Route exact path='/profile' element={<Profile/>}/>
                            <Route path='/dialogs' element={<Dialogs/>}/>
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
