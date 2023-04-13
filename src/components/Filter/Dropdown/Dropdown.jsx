import * as S from '../../../style/style'
import DropdownItem from './DropdownItem'
import { useEffect, useState } from 'react'

function Dropdown({ type, filterList, riseSelectedFilterCount }) {
    const [filterCountArray, setFilterCountArray] = useState([])
    const riseCount = (e) => {
        if (filterCountArray.includes(e.target.id)) {
            setFilterCountArray((filterCountArray) =>
                filterCountArray.filter((i) => i !== e.target.id)
            )
        } else {
            setFilterCountArray([...filterCountArray, e.target.id])
        }
    }
    useEffect(() => {
        riseSelectedFilterCount(filterCountArray.length)
    }, [filterCountArray])
    return (
        <S.Dropdown>
            <S.DropdownWrapper>
                <S.DropdownContent>
                    {type !== 'year' ? (
                        filterList.map((item, index) => {
                            return (
                                <DropdownItem
                                    key={index}
                                    id={index}
                                    item={item}
                                    riseCount={riseCount}
                                />
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
