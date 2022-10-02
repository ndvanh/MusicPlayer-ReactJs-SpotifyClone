import {uniqAuthor} from '../../utils/Utlis'
import ArtistInfo from '../../components/MusicContent/ArtistInfo'

export default function RecommendedArtist() {
  const filArtist = uniqAuthor.filter(song=>song.hot === true)
  return (
    <div className=" pt-6 pb-10 px-8 ">
    <h2 className="font-bold text-[25px]">Các nghệ sĩ được đề xuất</h2>
     <ArtistInfo dataArtist={filArtist}/>
   </div>
  )
}
