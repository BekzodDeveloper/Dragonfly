import React from 'react';
import styles from './Header.module.css';


const Header = (props) => {
    return (
        <header className={styles.header}>
            {/*<div className="container">*/}
                <div>
                    <img src="https://bekzoddeveloper.uz/images/logo.png"
                         alt="logo"/>
                </div>
            {/*</div>*/}
        </header>
)
}


export default Header;