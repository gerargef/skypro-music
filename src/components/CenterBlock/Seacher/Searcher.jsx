import { useContext } from 'react'
import { Context } from '../../../context/ThemeContext'
import * as S from '../../../style/style'
function Searcher() {
    const { themeType } = useContext(Context)
    return (
        <S.CenterblockSearch>
            <S.SearchSvg>
                <use
                    xlinkHref={`img/icon/sprite.svg#icon-search-${themeType}`}
                ></use>
            </S.SearchSvg>
            <S.SearchText
                type="search"
                placeholder="Поиск"
                name="search"
            ></S.SearchText>
        </S.CenterblockSearch>
    )
}

export default Searcher
