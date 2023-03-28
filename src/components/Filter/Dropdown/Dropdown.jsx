import { useEffect, useState } from 'react'

function Dropdown(props) {
    const { type, filterList, riseSelectedFilterCount } = props
    const [filterCount, setFilterCount] = useState(0)
    useEffect(() => {
        riseSelectedFilterCount(filterCount)
    }, [filterCount])

    return (
        <div className="dropdown">
            <div className="dropdown__wrapper">
                <div className="dropdown__content">
                    {type !== 'year' ? (
                        filterList.map((item, index) => {
                            return (
                                <p
                                    className="dpopdown__item"
                                    key={index}
                                    onClick={() =>
                                        setFilterCount(filterCount + 1)
                                    }
                                >
                                    {item}
                                </p>
                            )
                        })
                    ) : (
                        <div className="dropdown__radio">
                            {filterList.map((item, index) => {
                                return (
                                    <label className="radio__label" key={index}>
                                        <input
                                            type="radio"
                                            name="radio"
                                            className="radio__input"
                                        />{' '}
                                        <span>{item}</span>
                                    </label>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dropdown
