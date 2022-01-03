import React from 'react';
import styles from './Nav.module.css';
import "./../../styles/active-link.css"
import {NavLink} from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import homeImg from "./img/home.svg";
import userImg from "./img/user.svg";
import messageImg from "./img/messages.svg";
import notificationImg from "./img/notif.svg";
import musicImg from "./img/music.svg";
import settingsImg from "./img/settings.svg";
import moreImg from "./img/more.svg";


const Nav = (props) => {

    let navItems = [
        {path: "/", icon: homeImg, navText: "Home"},
        {path: "/profile", icon: userImg, navText: "Profile"},
        {path: "/messages", icon: messageImg, navText: "Messages"},
        {path: "/notification", icon: notificationImg, navText: "Notification"},
        {path: "/music", icon: musicImg, navText: "Music"},
        {path: "/settings", icon: settingsImg, navText: "Settings"},
        {path: "/more", icon: moreImg, navText: "More"},
    ];

    let navItemsEl = navItems.map(n => <NavItem path={n.path} icon={n.icon} navText={n.navText}/>);

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navItemsEl}
            </ul>

        </nav>
    )
}


export default Nav;