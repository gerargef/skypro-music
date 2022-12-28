
import PrevBtn from './player-btns/PrevBtn'
import PlayBtn from './player-btns/PlayBtn'
import NextBtn from './player-btns/NextBtn'
import RepeatBtn from './player-btns/RepeatBtn'
import ShuffleBtn from './player-btns/ShuffleBtn'

function PlayerControls() {
  return (
    <div className="player__controls">
      <PrevBtn/>
      <PlayBtn/>
      <NextBtn/>
      <RepeatBtn/>
      <ShuffleBtn/>
    </div>
  )
}

export default PlayerControls