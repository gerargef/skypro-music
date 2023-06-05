import Searcher from './Seacher/Searcher'
import Filter from '../Filter/Filter'
import CenterBlockContent from './CenterBlockContent'
// import {
//     // useState
//     // useEffect,
// } from 'react'
// import { getAllTracks } from '../../API/API'
import * as S from '../../style/style'
import { useGetAllTracksQuery } from '../../services/tracks'
import { useEffect } from 'react'
import { useRefreshTokenMutation } from '../../services/loginAndAuth'
import { refreshAccessToken } from '../../store/slices/tokenSlice'
// import { useGetAllTracksQuery } from '../../services/tracks'

function CenterBlock({ centerBlockTitle = 'Треки', settedTracks }) {
    // {

    // settedTracks
    // }
    // const [tracks, setTracks] = useState([])
    // useEffect(() => {
    //     console.log(data)
    //     // getAllTracks().then((data) => setTracks(data))
    // }, [])
    // console.log(tracks)
    const [refreshToken] = useRefreshTokenMutation()
    useEffect(() => {
        const refreshInterval = setInterval(async () => {
            if (!localStorage.getItem('refresh')) {
                return
            }
            const refreshResponse = await refreshToken({
                refresh: localStorage.getItem('refresh'),
            })
            refreshAccessToken(refreshResponse.data.access)
        }, 5000 * 60)

        return () => clearTimeout(refreshInterval)
    }, [])
    const { data } = useGetAllTracksQuery()

    return (
        <S.Centerblock>
            <Searcher />
            <S.CenterblockTitle>{centerBlockTitle}</S.CenterblockTitle>
            <Filter tracks={settedTracks ? settedTracks : data?.allTracks} />
            <CenterBlockContent
                tracks={settedTracks ? settedTracks : data?.allTracks}
            />{' '}
            *{/* <S.CenterblockTitle>{centerBlockTitle}</S.CenterblockTitle> */}
            {/* <Filter tracks={data} />
            <CenterBlockContent tracks={data} /> */}
        </S.Centerblock>
    )
}

export default CenterBlock
