import ContentTitle from './ContentTitle'
import PlayList from '../Play/PlayList'
import * as S from '../../style/style'

function CenterBlockContent({ tracks }) {
    return (
        <S.CenterblockContent>
            <ContentTitle />
            <PlayList tracks={tracks} />
        </S.CenterblockContent>
    )
}

export default CenterBlockContent
