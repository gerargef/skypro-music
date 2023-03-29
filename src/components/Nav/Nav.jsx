import { useState } from 'react'
import Burger from '../Burger/Burger'
import Menu from '../Burger/BurgerMenu'
import * as S from '../../style/style'

function Nav() {
    const [isMenuOpen, setMenuOpen] = useState()
    const isOpenMenuCallBack = (isMenuOpen) => {
        setMenuOpen(isMenuOpen)
    }
    return (
        <S.MainNav>
            <S.NavLogo>
                <S.LogoImg src="img/logo.png" alt="logo" />
            </S.NavLogo>
            <Burger isOpenMenuCallBack={isOpenMenuCallBack} />
            {isMenuOpen ? <Menu /> : null}
        </S.MainNav>
    )
}

export default Nav
