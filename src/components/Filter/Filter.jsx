import { useState } from 'react'

import FilterItem from './FilterItem'

function Filter({ tracks }) {
    const [isDropdownsOpen, setIsDropdownsOpen] = useState([
        { type: 'author', isOpen: false },
        { type: 'year', isOpen: false },
        { type: 'genre', isOpen: false },
    ])

    const toggleDropDown = (type) => {
        const copyArr = Object.assign([], isDropdownsOpen)
        const trueDropdownType = copyArr.filter(
            (item) => item.isOpen === true
        )[0]
        if (trueDropdownType && trueDropdownType.type !== type) {
            copyArr.forEach((item) => {
                if (item.type === trueDropdownType.type) {
                    item.isOpen = !item.isOpen
                }
            })
        }
        copyArr.forEach((item) => {
            if (item.type === type) {
                item.isOpen = !item.isOpen
            }
        })
        setIsDropdownsOpen(copyArr)
    }

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <FilterItem
                name={'исполнителю'}
                tracks={tracks}
                isDropdownsOpen={isDropdownsOpen[0].isOpen}
                type={'author'}
                toggleDropDown={toggleDropDown}
                setIsDropdownsOpen={setIsDropdownsOpen}
            />
            <FilterItem
                name={'году выпуска'}
                tracks={tracks}
                isDropdownsOpen={isDropdownsOpen[1].isOpen}
                type={'year'}
                toggleDropDown={toggleDropDown}
            />
            <FilterItem
                name={'жанру'}
                tracks={tracks}
                isDropdownsOpen={isDropdownsOpen[2].isOpen}
                type={'genre'}
                toggleDropDown={toggleDropDown}
            />
        </div>
    )
}

export default Filter
