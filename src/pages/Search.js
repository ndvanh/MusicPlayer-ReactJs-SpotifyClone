import {useContext,useState} from 'react' 
import { Songs } from '../context/MusicContext'
import useSongId from '../hooks/useSongId'

export default function Search() {
  const {Music,handleAddFavSong,isChecked} = useContext(Songs)
  const [pickid,handlePlay] = useSongId()
  const [input,setInput] = useState('')
  const handleSearch = (e) => {
    const lowercase = e.target.value.toLowerCase()
    setInput(lowercase)
  }
  const farray = Music.filter(fsong => {
    if(input === ''){
      return false
    }
    else {
      return fsong.name.toLowerCase().includes(input) || fsong.author.toLowerCase().includes(input)
    }  
  })
  return (
    <div className="  text-textwhite">
      <div className="px-8 py-6">
      <h1 className="font-bold text-[25px] sm:text-[20px]">
      Tìm kiếm bài hát, nghệ sĩ yêu thích
      </h1>
    <div className="mt-5 relative">
      <input 
      // value={input}
      onChange={handleSearch} 
      type="search" 
      placeholder="Tìm kiếm bài hát, nghệ sĩ..." 
      className="text-mainblack1 py-3 pl-[50px] pr-[20px] w-[360px] sm:w-full md:w-full rounded-full outline-none" 
      autoFocus 
      maxLength={100}/>
      <div className="absolute top-[10%] left-3">
        <span className="text-mainblack1 text-[25px]">
        <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    <div className="text-text1 py-5 w-[80%] sm:w-full">
          <table className="table-auto w-full text-left  border-spacing-[70px] ">
          <thead></thead>
            <tbody>
            {farray.map((song) =>(
                  <tr 
                  className="hover:bg-mainblack4 hover:rounded-[5px] hover:text-textwhite h-14 cursor-pointer duration-100" 
                  key={song.id}
                  style = {pickid === song.id ? {color :'white',backgroundColor:'#2a2a2a'} : {}}
                  onClick={() =>handlePlay(song.id) }
                  >
                  <td className="flex items-center my-[10px] px-3"> <img alt={`${song.name}`} src={song.links.images[1].url} className="h-[50px] w-[50px] sm:h-[40px] sm:w-[40px]" loading='lazy'/>
                   <span className="pl-[15px] sm:text-[12px]">{song.name}</span></td>
                  <td className="sm:text-[12px]">{song.author}</td>
                  <td className="rounded-r-[5px]">
                    <i 
                    style={isChecked.includes(song.id) ? {color:'#6c47ff'} : {}} 
                    className="fa-solid fa-heart text-textwhite duration-300" title='Thêm vào thư viện' 
                    onClick={() =>handleAddFavSong(song.id)}></i>
                  </td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
    </div>
    </div>
  )
}
