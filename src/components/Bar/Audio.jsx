import React, { useState } from 'react'
import * as S from '../../style/style'
import Player from './Player/Player'
import Volume from './Volume'
import BarPlayerProgress from './Player/BarPlayerProgress'
import { useRef } from 'react'

function Audio() {
    const audioRef = useRef(null)
    const [duration, setDuration] = useState(0)
    const onLoadMetaData = () => {
        setDuration(audioRef.current.duration)
    }

    return (
        <>
            <S.Audio
                autoplay
                preload="metadata"
                controls
                src="/audio/Bobby_Marleni_-_Dropin.mp3"
                ref={audioRef}
                onLoadedMetadata={onLoadMetaData}
            ></S.Audio>
            <S.Bar>
                <S.BarContent>
                    <BarPlayerProgress ref={audioRef} duration={duration} />
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
