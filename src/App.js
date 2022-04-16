import React from 'react';
import './App.css';

import {Routes, Route, useParams} from 'react-router-dom' ;
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) return <div className="preloader"><Preloader/></div>;
        return (
            <div className="app-wrapper">

                <HeaderContainer/>
                <div className="app-body">
                    <div className="sidebar">
                        <Nav/>
                    </div>

                    <div className="app-content">
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path='/' element={<Home/>}/>

                            <Route exact path='/profile'
                                   element={<Profile/>}>
                                <Route path=':userId'
                                       element={<Profile/>}/>
                            </Route>
                            <Route path='/dialogs'
                                   element={<DialogsContainer/>}
                            />
                            <Route path='/notification' element={<Page title="Notification"/>}/>
                            <Route path='/music' element={<Page title="Music"/>}/>
                            <Route path='/settings' element={<Page title="Settings"/>}/>
                            <Route path='/more' element={<Page title="More"/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                    {/*<aside className="aside">*/}
                    {/*    <FriendsListContainer/>*/}
                    {/*</aside>*/}
                </div>
            </div>

        );
    }
}

const Page = (props) => {
    return (<h1>{props.title}</h1>)
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const withParams = (Component) => props => <Component {...props} params={useParams()}/>;

export default compose(
    withParams,
    connect(mapStateToProps, {initializeApp}))
(App);
