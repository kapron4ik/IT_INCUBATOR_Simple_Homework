import React, {useState} from 'react'
import Routes from "./Routes";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    const [isActive, setIsActive] = useState<boolean>(true)

    const isMenuOpen = () => setIsActive(false)
    const isMenuClose = () => setIsActive(true)

    return (
        <div className={isActive ? `${s.nav} ${s.active}` : s.nav}
             tabIndex={1}
             onMouseEnter={() => isMenuOpen()}
             onMouseLeave={() => isMenuClose()}>
            <div className={s.item}>
                <NavLink to='/pre-junior' activeClassName={s.active}>Pre Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior' activeClassName={s.active}>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior-plus' activeClassName={s.active}>Junior+</NavLink>
            </div>
            <div className={s.burgerButtom}></div>
        </div>
    )
}

export default Header
