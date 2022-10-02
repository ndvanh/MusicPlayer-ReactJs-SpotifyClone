import { Link } from "react-router-dom";
import { PlayButton } from "../Buttons";

export default function ArtistInfo({dataArtist}) {
  return (
    <div className="grid grid-cols-6 gap-5 mt-5 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {dataArtist.map(fsong=>(
            <Link to={`/artist/${fsong.author}`} key={fsong.id}>
            <div  className="bg-mainblack2 hover:bg-mainblack5 p-4 rounded-[5px] duration-500 group cursor-pointer">
            <div className="mb-3">
              <div className="pt-[100%] bg-mainblack1 relative rounded-[5px]">
             <div> <img alt={`Ảnh ${fsong.author}`} src={fsong.links.images[0].url} loading='lazy' 
              className="h-full w-full absolute top-0 left-0 rounded-[5px] object-cover"/></div>
              <div className="lg:hidden"><PlayButton/></div>
              </div>
            </div>
            <div className="pb-3">
              <h3 className="text-[16px] font-bold overflow-hidden whitespace-nowrap text-ellipsis">{fsong.author}</h3>
                <span className="py-1 block text-[14px] text-text1">Nghệ sĩ</span>
              </div>
          </div>
            </Link>
          ))}
    </div>
  )
}
