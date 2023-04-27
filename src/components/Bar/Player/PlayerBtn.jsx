import React, { forwardRef, useState } from 'react'
import * as S from '../../../style/style'

const PlayerBtn = forwardRef(function PlayerBtn({ type }, ref) {
    const [btnType, setBtnType] = useState(type)
    const handleClick = () => {
        if (btnType === 'play') {
            setBtnType('pause')
            ref.current.play()
        }

        if (btnType === 'pause') {
            setBtnType('play')
            ref.current.pause()
        }
    }
    return (
        <S.PlayerBtnSvg alt={btnType} onClick={() => handleClick()}>
            <use xlinkHref={`/img/icon/sprite.svg#icon-${btnType}`}></use>
        </S.PlayerBtnSvg>
    )
})

export default PlayerBtn
