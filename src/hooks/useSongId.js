import { useContext,useState,useEffect}  from 'react'
import { Songs } from '../context/MusicContext'

export default function useSongId() {
  const {thesong,handleSong} =  useContext(Songs)
  const [pickid,setPickID] = useState()
  const handlePlay = (songid) => {
    handleSong(songid)
  }
  useEffect(() => {
    setPickID(thesong?.id)
  },[thesong])
  return [pickid,handlePlay]
}

