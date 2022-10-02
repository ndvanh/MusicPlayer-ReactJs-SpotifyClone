import {useState}  from 'react' 
import Music from '../data/songs.json'

export default function useGetSong() {
    // get song
  const [song,setSong] = useState()
  const handleSong = (songid) => {
  const thisSong =  Music.find(song => song.id === songid)
   if (!thisSong){
    setSong(Music[0])
   }
   else {
    setSong(thisSong)
   }
  }
  return [song,handleSong] 
}
