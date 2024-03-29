import Audio from '../components/Bar/Audio'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
import * as S from '../style/style'

function MainPage() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Nav />
                    <CenterBlock />
                    <Sidebar />
                </S.Main>
                <Audio />
            </S.Container>
        </S.Wrapper>
    )
}

export default MainPage
