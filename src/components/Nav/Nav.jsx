import { useState } from 'react'
import Burger from '../Burger/Burger'
import Menu from '../Burger/BurgerMenu'
import * as S from '../../style/style'
import { Link } from 'react-router-dom'

function Nav() {
    const [isMenuOpen, setMenuOpen] = useState()
    const isOpenMenuCallBack = (isMenuOpen) => {
        setMenuOpen(isMenuOpen)
    }
    return (
        <S.MainNav>
            <S.NavLogo>
                <Link to="/">
                    <S.LogoImg src="/img/logo.png" alt="logo" />
                </Link>
            </S.NavLogo>
            <Burger isOpenMenuCallBack={isOpenMenuCallBack} />
            {isMenuOpen ? <Menu /> : null}
        </S.MainNav>
    )
}

export default Nav
