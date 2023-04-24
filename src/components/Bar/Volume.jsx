import { useState } from 'react'
import * as S from '../../style/style'

function Volume() {
    const [value, setValue] = useState(70)
    function handleInputChange(e) {
        setValue(e.target.value)
        console.log(value)
        // let target = e.target
        // console.log(target.value)
        // const val = target.value

        // target.style.backgroundSize =
        //     ((val - min) * 100) / (max - min) + '% 100%'
    }

    return (
        <S.BarVolumeBlock>
            <S.VolumeContent>
                <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                    <S.VolumeProgressLine
                        type="range"
                        name="range"
                        value={value}
                        $range={value}
                        min="0"
                        onInput={(e) => handleInputChange(e)}
                    />
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.BarVolumeBlock>
    )
}

export default Volume
