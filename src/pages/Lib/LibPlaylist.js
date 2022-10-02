import { useContext, useEffect, useState}  from 'react' 
import { Songs} from '../../context/MusicContext'
import {Link} from 'react-router-dom'
import {PlayButton} from '../../components/Buttons/index'
import {LibPlaylistContent} from '../../components/Redirect/index'

export default function Lib_playlist() {
  const {favSong,recSong} =  useContext(Songs)
  const [coutFavSong,setCoutFavSong] = useState(favSong.length)
    useEffect(() => {
      setCoutFavSong(favSong.length) 
    },[favSong.length])
  const [coutRecSong,setCoutRecSong] = useState(recSong.length)
    useEffect(() => {
      setCoutRecSong(recSong.length) 
    },[recSong.length])
  return (
    <div className="mt-5 h-screen">
    <div className="grid grid-cols-6 gap-5 xl:grid-cols-3 sm:grid-cols-1">
        <div className="col-start-1 col-end-3 sm:col-end-1">
        <Link to='/library/fav_songs'>
          <LibPlaylistContent color='#fab1a0' coutSong={coutFavSong} headingContent='Bài hát đã thích' spanContent='bài hát đã thích'  />
          </Link> 
        </div>
          <div className="col-start-3 col-end-5 sm:col-start-1 sm:col-end-1">
        <Link to='/library/rec_played'>
        <LibPlaylistContent color='#00cec9' coutSong={coutRecSong} headingContent='Các bài hát gần đây' spanContent='bài hát gần đây'  /> 
          </Link> 
        </div>
        <div className="col-start-5 col-end-6 sm:col-start-1 sm:col-end-1">
          <Link to='/playlist'>
        <div  className="bg-mainblack2 hover:bg-[#2e2e2e] p-4 rounded-[5px] duration-500 group cursor-pointer">
            <div className="mb-3">
              <div className="pt-[100%] bg-mainblack1 relative rounded-[5px]">
             <div> <img alt='Playlist' src={require('../../assets/images/lofiava.jpg')} loading='lazy' 
              className="h-full w-full absolute top-0 left-0 rounded-[5px] object-cover"/></div>
              <div className="lg:hidden"><PlayButton/></div>
              </div>
            </div>
            <div className="pb-3">
              <h3 className="text-[16px] font-bold overflow-hidden whitespace-nowrap text-ellipsis">Va Music Playlist</h3>
                <span className="py-1 block text-[14px] text-text1">Của bạn</span>
              </div>
          </div> </Link>
          </div>
    </div>
    </div>
  )
}


