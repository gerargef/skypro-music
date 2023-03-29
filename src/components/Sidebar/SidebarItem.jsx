import * as S from '../../style/style'

function SidebarItem({ img }) {
    return (
        <S.SidebarItem>
            <a href="#">
                <img src={img} alt="day's playlist" />
            </a>
        </S.SidebarItem>
    )
}

export default SidebarItem
