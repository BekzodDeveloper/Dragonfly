import React from 'react';
import styles from './Nav.module.css';
import "./../../styles/active-link.css"
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
        {id: 1, path: "/", icon: homeImg, navText: "Home"},
        {id: 2, path: "/profile", icon: userImg, navText: "Profile"},
        {id: 3, path: "/dialogs", icon: messageImg, navText: "Messages"},
        {id: 4, path: "/notification", icon: notificationImg, navText: "Notification"},
        {id: 5, path: "/music", icon: musicImg, navText: "Music"},
        {id: 6, path: "/settings", icon: settingsImg, navText: "Settings"},
        {id: 7, path: "/more", icon: moreImg, navText: "More"},
    ];

    let navItemsEl = navItems.map(n => <NavItem path={n.path} icon={n.icon} navText={n.navText} key={n.id}/>);

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navItemsEl}
            </ul>

        </nav>
    )
}


export default Nav;