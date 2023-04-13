import * as S from '../../style/style'

function Menu() {
    return (
        <S.MenuList>
            <S.MenuItem>
                <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink to="/my-tracks">Мои треки</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink to="/login">Выйти</S.MenuLink>
            </S.MenuItem>
        </S.MenuList>
    )
}

export default Menu
