import React from 'react'
import {useContext} from 'react' 
import { Songs } from '../../context/MusicContext'
import { useParams} from "react-router-dom"
import { Information, SongTable } from '../../components/MusicContent'

export default function ArtistSongs() {
  const {Music} =  useContext(Songs)
  const params = useParams()
  const thisSong = Music.find(song=> song.author === params.artistId)
  const filListSong = Music.filter(song => song.author === thisSong.author)
  return (
    <div className=" h-screen">
      <Information type='Nghệ sĩ' 
                   title={thisSong.author} 
                   content={`Tuyển tập các bài hát của ${thisSong.author}`} 
                   linkImg = {thisSong.links.images[0].url}
                   color={thisSong.color}
      />
        <div className=" py-[10px]">
        <div className="text-text1">
          <SongTable dataSong = {filListSong}/>
        </div>
    </div>
    </div>
  )
}
