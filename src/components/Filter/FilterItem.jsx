import Dropdown from './Dropdown/Dropdown'
import React, { useState } from 'react'
import Counter from './Dropdown/Counter/Counter'

function FilterItem({ isDropdownsOpen, type, toggleDropDown, tracks, name }) {
    const [isOpen, setIsOpen] = useState(false)
    const createFilterListWithNoDuplicate = (type) => {
        const filterList = tracks.map((item) => item[`${type}`])
        const filterListWithNoDuplicate = filterList.filter(
            (type, i) => filterList.indexOf(type) === i
        )
        return filterListWithNoDuplicate
    }

    const filterListByYear = ['Более новые', 'Более старые']

    const toggle = () => {
        setIsOpen(!isOpen)
        toggleDropDown(type)
    }

    const [selectedFilter, setSelectedFilter] = useState(0)

    const riseSelectedFilterCount = (count) => {
        setSelectedFilter(count)
    }
    return (
        <div className="filter__item">
            <div
                className="filter__button button-author _btn-text"
                onClick={() => toggle()}
            >
                {name}
            </div>
            {selectedFilter ? <Counter count={selectedFilter} /> : null}

            {isDropdownsOpen ? (
                <Dropdown
                    type={type}
                    riseSelectedFilterCount={riseSelectedFilterCount}
                    filterList={
                        type !== 'year'
                            ? createFilterListWithNoDuplicate(type)
                            : filterListByYear
                    }
                />
            ) : null}
        </div>
    )
}

export default FilterItem
