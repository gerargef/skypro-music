import SceletonPlayList from '../Sceleton/SceletonPlayList'
import PlayItem from './PlayItem'
import * as S from '../../style/style'
function PlayList({ tracks }) {
    return (
        <S.ContentPlaylist>
            {tracks && tracks.length === 0 ? (
                <S.CenterblockText>Пока здесь ничего нет</S.CenterblockText>
            ) : null}
            {tracks ? (
                tracks.map((track) => <PlayItem key={track.id} {...track} />)
            ) : (
                <>
                    {Array.from({ length: 10 }).map((i, index) => (
                        <SceletonPlayList key={index} />
                    ))}
                </>
            )}
        </S.ContentPlaylist>
    )
}

export default PlayList
