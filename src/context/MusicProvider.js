import {Songs} from './MusicContext'
import Music from '../data/songs.json'
import {useGetSong,useAddSongs, useRecSong} from '../hooks/index'

export default function MusicProvider({children}) {
  const [song,handleSong] = useGetSong()
  const [favSong,handleAddFavSong,isChecked] = useAddSongs()
  const [recSong,setRecSong] = useRecSong()
  return (
    <Songs.Provider 
    value={{Music:Music, 
            thesong:song, 
            handleSong:handleSong, 
            favSong:favSong, 
            handleAddFavSong:handleAddFavSong, 
            isChecked:isChecked, 
            recSong: recSong,
            setRecSong:setRecSong
      }}>
      {children}
    </Songs.Provider>
  )
}
