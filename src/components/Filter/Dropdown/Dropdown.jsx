import * as S from '../../../style/style'
import DropdownItem from './DropdownItem'

function Dropdown({ type, filterList, riseCount, filterCountArray }) {
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
                                    filterCountArray={filterCountArray}
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
