import {Information,SongTable} from '../../components/MusicContent/index'
import {useContext} from 'react'
import { Songs } from '../../context/MusicContext'
import { LoginCon } from '../../context/LoginContext/LoginContext'
import { PrivateLoginRoute } from '../../components/Login/index'

export default function FavSongs() {
  const {favSong} =  useContext(Songs)
  const handleRemoveFavSong = () => {
    localStorage.removeItem('list_fav_songs')
    localStorage.removeItem('id_fav_songs')
    window.location.reload()
  }
  const {userLogin} =  useContext(LoginCon)
  return (
    <>
    {userLogin ? <div className=" sm:ml-[0px]">
      <Information type='Playlist' title='Bài hát đã thích' content='Danh sách yêu thích của bạn ở đây' img='landh.jpg' color='#fd79a8'/>
      <div className="py-[10px] relative">
        {favSong.length === 0 ? 
        <div className="text-textwhite text-center">
          <h1 className="text-[30px] font-bold py-4 sm:text-[20px]">Bài hát bạn yêu thích sẽ xuất hiện ở đây</h1>
          <h2 className="sm:text-[15px]">Nhấp vào biểu tượng trái tim để thêm vào thư viện</h2>
        </div> : 
        <div className="text-text1">
          <SongTable dataSong = {favSong} />
          <div className="absolute top-[-50px] right-[80px] cursor-pointer" onClick={handleRemoveFavSong}>
            <span className="text-textwhite">Xóa tất cả</span>
            </div>
        </div>}
    </div>
    </div> : <PrivateLoginRoute/>}
    </>
  )
}
