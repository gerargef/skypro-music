import Searcher from './Seacher/Searcher'
import Filter from '../Filter/Filter'
import CenterBlockContent from './CenterBlockContent'
import { useState, useEffect } from 'react'
import { getAllTracks } from '../../API/API'
import * as S from '../../style/style'

function CenterBlock({ centerBlockTitle = 'Треки', settedTracks }) {
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        getAllTracks().then((data) => setTracks(data))
    })

    return (
        <S.Centerblock>
            <Searcher />
            <S.CenterblockTitle>{centerBlockTitle}</S.CenterblockTitle>
            <Filter tracks={settedTracks ? settedTracks : tracks} />
            <CenterBlockContent tracks={settedTracks ? settedTracks : tracks} />
        </S.Centerblock>
    )
}

export default CenterBlock
