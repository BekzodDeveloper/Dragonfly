import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import searchImg from "./img/search.svg";
import logoImg from "./img/logo.svg";
import accountImg from "./img/accountPhoto.png"




const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.logoSearchWrapper}>
                    <NavLink className={styles.logoLink} to="/">
                        <div className={styles.logoImgWrapper}>
                            <img
                                src={logoImg}
                                alt="logo"/>
                        </div>
                    </NavLink>
                    <div className={styles.searchInput} >
                        <img className={styles.searchImg} src={searchImg} alt=""/>
                        <input type="text" placeholder="Search..."/>
                    </div>

                </div>

                <div className={styles.account}>
                    <a href="/" className={styles.accountInner}>
                        <div className={styles.accountImgWrapper}>
                            <img className={styles.accountImg} src={accountImg} alt="accountImg"/>
                        </div>
                        <div className={styles.accountName}>Bekzod</div>
                    </a>
                </div>
            </div>

        </header>
    )
}

export default Header;