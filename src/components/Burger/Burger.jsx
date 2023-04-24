import { useEffect, useState } from 'react'
import * as S from '../../style/style'

function Burger({ isOpenMenuCallBack }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        isOpenMenuCallBack(isMenuOpen)
    }, [isMenuOpen])
    return (
        <S.NavBurger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {Array.from({ length: 3 }).map((i, index) => (
                <S.BurgerLine key={index} />
            ))}
        </S.NavBurger>
    )
}

export default Burger
