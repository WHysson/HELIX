import React from 'react';
import style from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.nav}>
            <a className={style.item} href="/profile">Profile</a>
            <a className={style.item} href="/messages">Messages</a>
            <a className={style.item} href="/news">News</a>
            <a className={style.item} href="/music">Music</a>
            <a className={style.item} href="/settings">Settings</a>
        </nav>
    )
}

export default Navbar