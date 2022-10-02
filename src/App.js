import './App.css'
import {PlayBar} from './components/MusicContent/index'
import {Home,Search,NotFound,PlayList,WrapperMB} from './pages/index'
import {Lib,LibArtists,LibPlaylist,FavSongs, RecentlyPlayed} from './pages/Lib/index'
import {Artist,RecommendedArtist,ArtistSongs} from './pages/Artists/index'
import { Routes,Route } from 'react-router-dom'
import { Navbar,Header } from './components/Redirect/index'
import {Login,UserInfo} from './pages/Login/index'
import MusicProvider from './context/MusicProvider'

function App() {
  return (
  <div className="App">
    <Login/>
    <Header/>
  <MusicProvider>
  <WrapperMB>
    <Navbar/>
  <div className="ml-[250px] lg:ml-0 sm:ml-0 md:ml-0">
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/library' element={<Lib/>}>
      <Route  index element={<LibPlaylist/>}/>
      <Route path='lib_playlist' element={<LibPlaylist/>}/>
      <Route path='lib_artists' element={<LibArtists/>}/>
    </Route>
    <Route path='/library/fav_songs' element={<FavSongs/>}/>
    <Route path='/library/rec_played' element={<RecentlyPlayed/>}/>
    <Route path='/playlist' element={<PlayList/>}/>
    <Route path='/artist' element={<Artist/>}>
      <Route  index element={<NotFound/>}/>
      <Route path=':artistId' element={<ArtistSongs/>} />
      <Route path='recommended_artist' element={<RecommendedArtist/>}/>
    </Route>
    <Route path='user_info' element={<UserInfo/>} />
    <Route path='*' element={<NotFound/>} />
  </Routes>
  </div>
  </WrapperMB>
   <PlayBar />
   </MusicProvider>
    </div>
  );
}
export default App;
