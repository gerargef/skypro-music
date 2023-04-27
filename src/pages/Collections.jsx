import React from 'react'
import Audio from '../components/Bar/Audio'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
import * as S from '../style/style'
import { useParams } from 'react-router-dom'
import { getCollections } from '../API/API'
import { useEffect, useState } from 'react'

const collectionTitles = [
    { id: 1, title: 'Плейлист дня ' },
    { id: 2, title: '100 танцевальных хитов' },
    { id: 3, title: 'Инди заряд' },
]

function Collections() {
    const params = useParams()
    const [collections, setCollections] = useState([])
    useEffect(() => {
        getCollections(params.id).then((data) => setCollections(data.items))
        return function cleanup() {
            setCollections([])
        }
    }, [params.id])

    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Nav />
                    <CenterBlock
                        centerBlockTitle={
                            collectionTitles.find(
                                (title) => title.id === Number(params.id)
                            ).title
                        }
                        settedTracks={collections}
                    />
                    <Sidebar />
                </S.Main>
                <Audio />
            </S.Container>
        </S.Wrapper>
    )
}

export default Collections
