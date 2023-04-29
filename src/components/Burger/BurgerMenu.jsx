import { useContext } from 'react'
import * as S from '../../style/style'
import { Context } from '../../context/ThemeContext'
import { ThemeContext } from 'styled-components'

function Menu() {
    const { themeType, toggleTheme } = useContext(Context)
    const themeContext = useContext(ThemeContext)
    console.log(themeContext)
    const deleteToken = () => {
        document.cookie = "token=''=;max-age=-1"
    }
    return (
        <S.MenuList>
            <S.MenuItem>
                <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink to="/my-tracks">Мои треки</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink to="/login" onClick={deleteToken}>
                    Выйти
                </S.MenuLink>
            </S.MenuItem>
            <S.ToggleThemeSvg alt={'Toggle theme'} onClick={toggleTheme}>
                <use
                    xlinkHref={`/img/icon/sprite.svg#icon-toggle-theme-${themeType}`}
                ></use>
            </S.ToggleThemeSvg>
        </S.MenuList>
    )
}

export default Menu
