import { useEffect, useState } from 'react'
import * as S from '../../../style/style'

function Dropdown({ type, filterList, riseSelectedFilterCount }) {
    const [filterCount, setFilterCount] = useState(0)
    useEffect(() => {
        riseSelectedFilterCount(filterCount)
    }, [filterCount])

    return (
        <S.Dropdown>
            <S.DropdownWrapper>
                <S.DropdownContent>
                    {type !== 'year' ? (
                        filterList.map((item, index) => {
                            return (
                                <S.DpopdownItem
                                    key={index}
                                    onClick={() =>
                                        setFilterCount(filterCount + 1)
                                    }
                                >
                                    {item}
                                </S.DpopdownItem>
                            )
                        })
                    ) : (
                        <S.DropdownRadio>
                            {filterList.map((item, index) => {
                                return (
                                    <S.RadioLabel key={index}>
                                        <S.RadioInput
                                            type="radio"
                                            name="radio"
                                        />
                                        <S.RadioBox></S.RadioBox>
                                        <span>{item}</span>
                                    </S.RadioLabel>
                                )
                            })}
                        </S.DropdownRadio>
                    )}
                </S.DropdownContent>
            </S.DropdownWrapper>
        </S.Dropdown>
    )
}

export default Dropdown
