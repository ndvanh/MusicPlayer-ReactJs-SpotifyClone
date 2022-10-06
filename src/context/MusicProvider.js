import {Songs} from './MusicContext'
import Music from '../data/songs.json'
import {useGetSong,useAddSongs, useRecSong} from '../hooks/index'
import { useMemo } from 'react'

export default function MusicProvider({children}) {
  const [song,handleSong] = useGetSong()
  const [favSong,handleAddFavSong,isChecked] = useAddSongs()
  const [recSong,setRecSong] = useRecSong()
  const musicValue = useMemo(()=>{
    return {
      Music, 
      thesong:song, 
      handleSong, 
      favSong, 
      handleAddFavSong, 
      isChecked, 
      recSong,
      setRecSong
   }
  },[favSong, handleAddFavSong ,isChecked, recSong, song])
  return (
    <Songs.Provider 
    value={musicValue}>
      {children}
    </Songs.Provider>
  )
}
