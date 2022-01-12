import React from 'react';
import './App.css';

import {Routes, Route} from 'react-router-dom' ;
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Home from "./components/Home/Home";
import FriendsList from "./components/Sidebar/FriendsList";


const App = (props) => {

    return (
        <div className="app-wrapper">

            <Header/>
            <div className="app-body">
                <div className="sidebar">
                    <Nav/>
                </div>

                <div className="app-content">
                    <Routes>
                        <Route path='/' element={<Home/>}/>

                        <Route exact path='/profile'
                               element={<Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}
                               />}
                        />
                        <Route path='/dialogs'
                               element={<Dialogs dialogPage={props.state.dialogPage}
                                                 dispatch={props.dispatch}
                               />}/>
                        <Route exact path='/notification' element={<Page title="Notification"/>}/>
                        <Route exact path='/music' element={<Page title="Music"/>}/>
                        <Route exact path='/settings' element={<Page title="Settings"/>}/>
                        <Route exact path='/more' element={<Page title="More"/>}/>
                    </Routes>
                </div>
                <aside className="aside">
                    <FriendsList sidebar={props.state.sidebar}/>
                </aside>
            </div>
        </div>

    );
}

const Page = (props) => {
    return (<h1>{props.title}</h1>)
}

export default App;
