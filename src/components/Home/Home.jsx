import React from 'react';
import styles from './Home.module.css';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";


const HomeContent = (props) => {
    return (<div>{props.title}</div>)
}

const Home = (props) => {

    return (
        <div >
            <div className={styles.head}>
                <h1>Home</h1>

                <ul className={styles.menuList}>
                    <li className={styles.item}><NavLink className="item-link" exact to="/">Overview</NavLink>
                    </li>
                    <li className={styles.item}><NavLink className="item-link" exact to="/create-post">Create
                        post</NavLink>
                    </li>
                    <li className={styles.item}><NavLink className="item-link" exact to="/friends">Friends</NavLink>
                    </li>

                </ul>

            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}


export {
    Home,
    HomeContent
}