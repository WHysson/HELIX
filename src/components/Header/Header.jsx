import React from 'react';
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
          <img className={style.item} src="https://s1.logaster.com/static/v3/img/products/logo.png"/>
        </header>  
    )
}

export default Header