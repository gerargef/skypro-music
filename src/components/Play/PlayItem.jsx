import { countTrackTime } from '../../utils/utils'
import * as S from '../../style/style'
import {
    useAddTrackToFavoritesByIdMutation,
    useDeleteTrackFromFavoriteByIdMutation,
} from '../../services/tracks'
import { useState } from 'react'
function PlayItem({ name, author, album, id, duration_in_seconds }) {
    const [addTrackToFavoritesById] = useAddTrackToFavoritesByIdMutation()
    const [deleteTrackFromFavoriteById] =
        useDeleteTrackFromFavoriteByIdMutation()
    const [isFavorite, setIsFavorite] = useState(false)
    const handleToggleTrackToFavorites = (id) => {
        if (isFavorite) {
            deleteTrackFromFavoriteById(id)
            console.log(id)
        } else {
            addTrackToFavoritesById(id)
            console.log(id)
        }
        setIsFavorite(!isFavorite)
    }
    return (
        <S.PlaylistItem>
            <S.Track>
                <S.TrackTtitle>
                    <S.TrackTitleImage>
                        <S.TrackTitleSvg alt="music">
                            <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitleLink href="http://">
                        {name} <span className="track__title-span"></span>
                    </S.TrackTitleLink>
                </S.TrackTtitle>
                <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
                <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
                <div>
                    <S.TrackTimeSvg
                        $isFavorite={isFavorite}
                        alt="time"
                        onClick={() => handleToggleTrackToFavorites(id)}
                        // onClick={handleAddTreckToFavorites(id)}
                    >
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>
                        {countTrackTime(duration_in_seconds)}
                    </S.TrackTimeText>
                </div>
            </S.Track>
        </S.PlaylistItem>
    )
}

export default PlayItem
