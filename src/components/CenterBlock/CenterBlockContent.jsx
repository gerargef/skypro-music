
import ContentTitle from './ContentTitle'
import PlayList from '../Play/PlayList'
function CenterBlockContent({tracks}) {
  return (
    <div className="centerblock__content">
        <ContentTitle/>
        <PlayList tracks={tracks}/>
    </div>
  )
}

export default CenterBlockContent