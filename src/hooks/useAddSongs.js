import {useContext, useState} from 'react'
import Music from '../data/songs.json'
import {LoginCon} from '../context/LoginContext/LoginContext'

export default function useAddSongs() {
   const {userLogin,toggleLoginForm} = useContext(LoginCon)
    const [favSong,setFavSong] = useState(()=>{
      const savedSong = JSON.parse(localStorage.getItem('list_fav_songs'))
      return savedSong || []
    })
    const [isChecked,setIsChecked] = useState(()=>{
      const savedId = JSON.parse(localStorage.getItem('id_fav_songs'))
      return savedId || []
    }) 
    const handleAddFavSong = (songid) => {
      if(userLogin){
        const thisSong = Music.find(song => song.id === songid)
      setFavSong(prev => {
       if(favSong.some(song => song.id === thisSong.id)){
        const localFavSong =  [...prev].filter(songItem => songItem.id !== thisSong.id)
        localStorage.setItem('list_fav_songs',JSON.stringify(localFavSong))
          return localFavSong
       }
       else{
        localStorage.setItem('list_fav_songs',JSON.stringify([...prev,thisSong]))
        return [...prev,thisSong]  
       }
      })
      setIsChecked(prev => {
        if(isChecked.includes(songid)){
          const localFavId = [...prev].filter(idItem => idItem !== songid)
          localStorage.setItem('id_fav_songs',JSON.stringify(localFavId))
          return localFavId
        }
        else{
          localStorage.setItem('id_fav_songs',JSON.stringify([...prev,songid]))
          return [...prev,songid]
        } 
      })
      }
      else {
          toggleLoginForm()
    }
      }
  return [favSong,handleAddFavSong,isChecked]
}
