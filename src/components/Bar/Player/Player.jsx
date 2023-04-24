import PlayerControls from '../Player/PlayerControls'
import PlayerTrack from './PlayerTrack'
import * as S from '../../../style/style'
import { forwardRef } from 'react'

const Player = forwardRef(function Player(props, ref) {
    return (
        <S.BarPlayer>
            <PlayerControls ref={ref} />
            <PlayerTrack />
        </S.BarPlayer>
    )
})

export default Player
