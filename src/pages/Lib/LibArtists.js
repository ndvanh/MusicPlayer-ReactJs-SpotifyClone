import React from 'react'
import {uniqAuthor} from '../../utils/Utlis'
import ArtistInfo from '../../components/MusicContent/ArtistInfo'

export default function Lib_artists() {
  const artistList = uniqAuthor
  return (
    <div className=''>
          <ArtistInfo dataArtist={artistList}/>
    </div> 
  )
}
