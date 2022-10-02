import React, { useContext } from 'react'
import { Information, SongTable } from '../../components/MusicContent'
import { Songs } from '../../context/MusicContext'

export default function RecentlyPlayed() {
  const {recSong} = useContext(Songs)
  const handleRemoveRecPlayed = () => {
    localStorage.removeItem('list_rec_played')
    window.location.reload()
  }
  return (
    <div className=" sm:ml-[0px]">
      <Information type='Playlist' title='Gần đây' content='Các bài hát gần đây' img='images.png' color='#00cec9'/>
      <div className="py-[10px] relative">
       {recSong.length === 0 ? 
       <div className="text-textwhite text-center">
       <h1 className="text-[30px] font-bold py-4 sm:text-[20px]">Chưa có bài hát nào gần đây </h1>
     </div> : 
     <div>
      <div className="text-text1">
      <SongTable dataSong = {recSong} />
     </div>
      <div className="text-text1">
      <div className="absolute top-[-50px] right-[80px] cursor-pointer" onClick={handleRemoveRecPlayed}>
        <span className="text-textwhite">Xóa tất cả</span>
        </div>
    </div>
     </div>
       } 
    </div>
    </div> 
  )
}
