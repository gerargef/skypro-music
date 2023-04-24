import React, { forwardRef, useEffect, useState } from 'react'
import * as S from '../../../style/style'

const BarPlayerProgress = forwardRef(function BarPlayerProgress(props, ref) {
    const [range, setRange] = useState(0)
    const [duration, setDuration] = useState(200)
    useEffect(() => {
        let timer = setInterval(() => {
            if (ref.current.duration) {
                setDuration(ref.current.duration)
            }
        }, 100)
        return () => clearInterval(timer)
    }, [duration])

    useEffect(() => {
        let timer = setInterval(() => {
            if (ref.current) {
                setRange(ref.current.currentTime)
            }
        }, 100)
        return () => clearInterval(timer)
    }, [])
    return (
        <S.BarPlayerProgress
            min="0"
            max={duration}
            value={range}
        ></S.BarPlayerProgress>
    )
})

export default BarPlayerProgress
