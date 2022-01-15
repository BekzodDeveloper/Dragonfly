import React from 'react';
import './App.css';

import {Routes, Route} from 'react-router-dom' ;
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsListContainer from "./components/Sidebar/FriendsListContainer";


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
                               element={<Profile/>}
                        />
                        <Route path='/dialogs'
                               element={<DialogsContainer/>}
                        />
                        <Route exact path='/notification' element={<Page title="Notification"/>}/>
                        <Route exact path='/music' element={<Page title="Music"/>}/>
                        <Route exact path='/settings' element={<Page title="Settings"/>}/>
                        <Route exact path='/more' element={<Page title="More"/>}/>
                    </Routes>
                </div>
                <aside className="aside">
                    <FriendsListContainer/>
                </aside>
            </div>
        </div>

    );
}

const Page = (props) => {
    return (<h1>{props.title}</h1>)
}

export default App;
