import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Home, HomeContent} from "./components/Home/Home";


const App = (props) => {

    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <div className="app-body">
                    <Nav/>
                    <div className="app-content">
                        <Routes>
                            <Route path='/' element={<Home/>}>
                                <Route index element={<p>Overview</p>}/>
                                <Route path='/create-post' element={<p>Create post</p>}/>
                                <Route path='/friends' element={<p>Friends</p>}/>
                            </Route>

                            <Route exact path='/profile'
                                   element={<Profile state={props.state.profilePage}/>}/>
                            <Route path='/dialogs'
                                   element={<Dialogs state={props.state.dialogPage}/>}/>
                            <Route exact path='/news' element={<Page title="News"/>}/>
                            <Route exact path='/music' element={<Page title="Music"/>}/>
                            <Route exact path='/settings' element={<Page title="Settings"/>}/>
                            <Route exact path='/one' element={<p>One</p>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>

    );
}

const Page = (props) => {
    return (<h1>{props.title}</h1>)
}


export default App;
