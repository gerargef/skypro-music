import { useContext } from 'react'
import * as S from '../../style/style'
import { Context } from '../../context/ThemeContext'
import { logout } from '../../store/slices/tokenSlice'
import { useDispatch } from 'react-redux'
import { setLogout } from '../../store/slices/userSlice'

function Menu() {
    const { themeType, toggleTheme } = useContext(Context)
    const dispatch = useDispatch()
    const deleteToken = () => {
        localStorage.clear()
        dispatch(logout())
        dispatch(setLogout())
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
