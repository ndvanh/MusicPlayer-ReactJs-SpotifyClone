import { useContext,useState,useEffect } from "react"
import { Songs } from "../../context/MusicContext"
import { useSongId } from "../../hooks"

export default function SongTable({dataSong}) {
 const {handleAddFavSong,isChecked} =  useContext(Songs)
 const [pickid,handlePlay] = useSongId()
 const [sticky , setSticky] = useState("")
useEffect(()=>{
  const handleSticky = () => {
    const scrollTop  = document.documentElement.scrollTop
    const stickyClass = scrollTop >= 320 ? "bg-mainblack3" : ""
    setSticky(stickyClass)
   }
   document.addEventListener('scroll',handleSticky)
  return () => {
    document.removeEventListener('scroll',handleSticky)
  }
 },[])
  return (
    <div>
        <table className="table-auto w-full text-left border-collapse border-spacing-[70px] ">
            <thead className={`shadow-[0_1px_#4d4c4c] sticky top-[62px] lg:top-[84px] duration-200 ${sticky}`}>
              <tr>
                <th className="w-[5%] px-[30px] py-[15px]">#</th>
                <th className="uppercase">Tiêu đề</th>
                <th className="w-[30%] uppercase">Nghệ sĩ</th>
                <th className="w-[10%]"><i className="fa-solid fa-heart-circle-plus"></i></th>
              </tr>
            </thead>
            <tbody>
            {dataSong.map((song,index) =>(
                  <tr 
                  className="hover:bg-mainblack4 hover:rounded-[5px] hover:text-textwhite h-14 cursor-pointer duration-100" 
                  key={song.id}
                  style = {pickid === song.id ? {color :'white',backgroundColor:'#2a2a2a'} : {}}
                  onClick={() =>handlePlay(song.id) }
                  >
                  <td className="px-[30px] rounded-l-[5px]">{index + 1}</td>
                  <td className="flex items-center my-[10px]"> <img alt={`Ảnh ${song.name}`} src={song.links.images[1].url} className="h-[50px] w-[50px] sm:h-[40px] sm:w-[40px]" loading='lazy'/>
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
  )
}
