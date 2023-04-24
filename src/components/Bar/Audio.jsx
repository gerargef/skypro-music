import React from 'react'
import * as S from '../../style/style'
import Player from './Player/Player'
import Volume from './Volume'
import BarPlayerProgress from './Player/BarPlayerProgress'
import { useRef } from 'react'

function Audio() {
    const audioRef = useRef(null)

    return (
        <>
            <S.Audio
                autoplay
                preload="metadata"
                controls
                src="/audio/Bobby_Marleni_-_Dropin.mp3"
                ref={audioRef}
            ></S.Audio>
            <S.Bar>
                <S.BarContent>
                    <BarPlayerProgress ref={audioRef} />
                    <S.BarPlayerBlock>
                        <Player ref={audioRef} />
                        <Volume />
                    </S.BarPlayerBlock>
                </S.BarContent>
            </S.Bar>
        </>
    )
}

export default Audio
