import React from 'react'

import * as S from '../../../style/style'
import { useState } from 'react'
import { useEffect } from 'react'

function DropdownItem({ id, item, riseCount, filterCountArray }) {
    const [isSelected, setIsSelected] = useState(false)
    useEffect(() => {
        if (filterCountArray.includes(String(id))) {
            setIsSelected(true)
        } else setIsSelected(false)
    }, [filterCountArray])
    return (
        <S.DpopdownItem
            id={id}
            onClick={(e) => riseCount(e)}
            $selected={isSelected}
        >
            {item}
        </S.DpopdownItem>
    )
}

export default DropdownItem
