import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import searchImg from "./img/search.svg";
import logoImg from "./img/logo.svg";
import accountImg from "../../assets/Profile/avatar-profile.png"


const Header = (props) => {

    let searchTextRef = React.createRef();
    let searchBtn = () => {
        let searchText = searchTextRef.current.value;
        alert(searchText);
    }
    // debugger

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.logoSearchWrapper}>
                    <NavLink className={styles.logoLink} to="/">
                        <div className={styles.logoImgWrapper}>
                            <img src={logoImg} alt="logo"/>
                        </div>
                    </NavLink>
                    <div className={styles.searchInput}>
                        <button className={styles.searchBtn} type="submit" onClick={searchBtn}><img
                            className={styles.searchImg} src={searchImg} alt=""/></button>
                        <input ref={searchTextRef} type="text" placeholder="Search..."/>
                    </div>

                </div>
                <div className={styles.account}>
                    {props.isAuth ?
                        <div className={styles.loginBlock}>
                            <NavLink to={"/profile"} className={styles.accountInner}>
                                <div className={styles.accountImgWrapper}>
                                    <img className={styles.accountImg} src={accountImg} alt="accountImg"/>
                                </div>
                                <div className={styles.accountName}>{props.login}</div>
                            </NavLink>
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        : <div>
                            <NavLink to='/login'>Login</NavLink>
                        </div>
                    }
                </div>
            </div>

        </header>
    )
}

export default Header;