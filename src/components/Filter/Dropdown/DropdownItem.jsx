import React from 'react'

import * as S from '../../../style/style'
import { useState } from 'react'

function DropdownItem({ id, item, riseCount }) {
    const [isSelected, setIsSelected] = useState(false)
    const itemHandleCLick = (e) => {
        riseCount(e)
        setIsSelected(!isSelected)
    }
    return (
        <S.DpopdownItem
            id={id}
            onClick={(e) => itemHandleCLick(e)}
            $selected={isSelected}
        >
            {item}
        </S.DpopdownItem>
    )
}

export default DropdownItem
