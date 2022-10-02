import { useContext}  from 'react' 
import { Songs } from '../context/MusicContext'
import {Information,SongTable} from '../components/MusicContent/index'

//////// ALL SONGS
export default function PlayList() {
 const {Music} =  useContext(Songs)
  return (
    <div className=" sm:ml-[0px]">
  <Information type='Playlist' 
               title='This is Va music' 
               content='Best songs that are copyright free and safe music for gaming, live streaming, studying' 
               img='lofiava.jpg' 
               color='#fab1a0'
  />
    <div className="py-[10px]">
        <div className="text-text1">
          <SongTable dataSong={Music}/>
        </div>
    </div>
    </div>
  )
}
