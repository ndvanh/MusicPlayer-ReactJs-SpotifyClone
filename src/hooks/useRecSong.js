import {useState} from 'react'

export default function useRecSong() {
    const [recSong,setRecSong] = useState(()=>{
      const savedRec = JSON.parse(localStorage.getItem('list_rec_played'))
      return savedRec || []
    })
  return [recSong,setRecSong]
}
