// import { useEffect, useState } from 'react'
import Audio from '../components/Bar/Audio'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
// import { useGetFavoriteTracksQuery } from '../services/tracks'
import * as S from '../style/style'
import { useGetAllTracksQuery } from '../services/tracks'

// import { getAllFavourite } from '../API/API'

function MyTracks() {
    // const [favourites, setFavourites] = useState([])
    // useEffect(() => {
    //     getAllFavourite().then((data) => setFavourites(data))
    // }, [])
    // const { data } = useGetFavoriteTracksQuery()
    // console.log(data)
    const { data } = useGetAllTracksQuery()
    console.log(data?.favTracks)
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Nav />
                    <CenterBlock
                        centerBlockTitle="Мои треки"
                        settedTracks={data?.favTracks}
                    />
                    <Sidebar />
                </S.Main>
                <Audio />
            </S.Container>
        </S.Wrapper>
    )
}

export default MyTracks
