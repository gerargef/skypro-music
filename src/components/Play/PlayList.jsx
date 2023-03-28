import { useEffect } from 'react'
import { useState } from 'react'
import SceletonPlayList from '../Sceleton/SceletonPlayList'
import PlayItem from './PlayItem'

function PlayList({ tracks }) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <div className="content__playlist playlist">
            {isLoading ? (
                <section className="sceletons">
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                    <SceletonPlayList />
                </section>
            ) : (
                tracks.map((track) => <PlayItem key={track.id} {...track} />)
            )}
        </div>
    )
}

export default PlayList
