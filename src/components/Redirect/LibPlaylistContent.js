import { PlayButton } from "../Buttons";
export default function LibPlaylistContent({color,coutSong,spanContent,headingContent}) {
  return (
    <div className="group h-full relative rounded-[5px] cursor-pointer flex items-end p-4" style={{background:`linear-gradient(to bottom,#6c47ff,${color})`}}>
          <div>
            <h2 className="font-bold text-[30px]">
              {headingContent}
            </h2>
            <span>
              {`${coutSong} ${spanContent}`}
            </span>
          </div>
          <div className="lg:hidden"><PlayButton/></div>
    </div> 
  )
}
