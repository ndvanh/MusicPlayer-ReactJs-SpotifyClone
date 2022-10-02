import {useState,useEffect} from 'react' 
import {Play} from '../components/icons/play/index'
import {Link} from 'react-router-dom'
import {uniqAuthor} from '../utils/Utlis'
import {Button} from '../components/Buttons/index'
import ArtistInfo from '../components/MusicContent/ArtistInfo'

export default function Home() {
  const [time,setTime] = useState('Chào buổi sáng')
  const hours = new Date().getHours()
  useEffect(() => {
    if(hours >= 4 && hours < 12 ){
      setTime('Chào buổi sáng 🌅')
    } else if(hours >= 12 && hours < 18) {
      setTime('Chào buổi chiều ⛅')
    } else {
      setTime('Chào buổi tối 🌃')
    }
   
  },[hours])
  const filArtist = uniqAuthor.filter(song=>song.hot === true).slice(0,6)
  return (
    <div className=" text-textwhite sm:ml-0">
      <div className="px-8 py-6">
        <h1 className="font-bold text-[30px]">{time}</h1>
        <div className="py-5">
        <h2 className="font-bold text-[25px]">Playlist #</h2>
        <Link to='/playlist'>
        <div className="flex bg-mainblack3 rounded-[5px]  mt-5 cursor-pointer hover:bg-mainblack4 duration-300 sm:block">
          <div className="p-5">
          <img alt="Ảnh playlist" src={require('../assets/images/lofiava.jpg')} className="h-[250px] w-full xl:h-[200px] lg:h-[250px] md:h-[250px]"/>
          </div>
          <div className="mt-5 ml-10 xl:ml-7"> 
          <h3 className="text-[60px] xl:text-[45px] md:text-[35px]">Va Music Playlist</h3>
          <div className="mt-10 xl:mt-8 md:mt-10 sm:hidden "><Button title="play list" p='20px'><Play/></Button></div>
          </div>
        </div>
        </Link>
        </div>
        {/* Nghệ sĩ đc đề xuất (6) */}
        <div className="py-5">
         <div className="flex items-center justify-between">
         <h2 className="font-bold text-[25px]">Nghệ sĩ được đề xuất</h2>
         <Link to='/artist/recommended_artist'><span className="text-text1 uppercase font-bold text-[14px] sm:text-[10px] cursor-pointer hover:underline">Xem tất cả</span></Link>
         </div>
          <ArtistInfo dataArtist={filArtist}/>
        </div>
      </div>
    </div>
  )
}
