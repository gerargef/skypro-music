import * as S from '../../style/style'
function ContentTitle() {
    return (
        <S.ContentTitle>
            <S.PlaylistTitle>Трек</S.PlaylistTitle>
            <S.PlaylistTitle>ИСПОЛНИТЕЛЬ</S.PlaylistTitle>
            <S.PlaylistTitle>АЛЬБОМ</S.PlaylistTitle>
            <S.PlaylistTitle>
                <S.PlaylistTitleSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </S.PlaylistTitleSvg>
            </S.PlaylistTitle>
        </S.ContentTitle>
    )
}

export default ContentTitle
