import Player from './Player/Player'
import Volume from './Volume'
import * as S from '../../style/style'
import BarPlayerProgress from './Player/BarPlayerProgress'

function Bar() {
    return (
        <S.Bar>
            <S.BarContent>
                <BarPlayerProgress />
                <S.BarPlayerBlock>
                    <Player />
                    <Volume />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    )
}

export default Bar
