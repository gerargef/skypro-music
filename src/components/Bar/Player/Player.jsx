import PlayerControls from './PlayerControls'
import PlayerTrack from './PlayerTrack'
import * as S from '../../../style/style'

function Player() {
    return (
        <S.BarPlayer>
            <PlayerControls />
            <PlayerTrack />
        </S.BarPlayer>
    )
}

export default Player
