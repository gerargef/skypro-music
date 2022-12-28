
import Searcher from './Searcher'
import Title from './Title'
import Filter from './Filter'
import CenterBlockContent from './CenterBlockContent'

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
        <Searcher/>
        <Title/>
        <Filter/>
        <CenterBlockContent/>
    </div>
  )
}

export default CenterBlock