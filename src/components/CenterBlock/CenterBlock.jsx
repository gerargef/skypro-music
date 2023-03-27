import Searcher from './Seacher/Searcher'
import Title from './CenterBlockTitle'
import Filter from '../Filter/Filter'
import CenterBlockContent from './CenterBlockContent'
import { useState, useEffect } from 'react'
import {getAllTracks} from '../../API/API'

function CenterBlock() {
  const [ tracks, setTracks ] = useState([]);
  useEffect(() => {
    getAllTracks().then((data) => setTracks(data));
   },[]);
  return (
    <div className="main__centerblock centerblock">
        <Searcher/>
        <Title/>
        <Filter tracks={tracks}/>
        <CenterBlockContent tracks={tracks}/>
    </div>
  )
}

export default CenterBlock