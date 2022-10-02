import { memo } from 'react'
import {MenuItems} from '../../data/NavItems'
import {NavLink,Link} from 'react-router-dom'

function Navbar() {
  const linkActive = ({isActive}) => ({
    color : isActive ? 'white' : ''
  })
  return (
    <nav className=" bg-mainblack1 h-screen w-[250px] fixed lg:hidden pt-[20px] pl-[20px] top-0">
     <div className="text-textwhite">
     <Link to='/'>
     <div className="flex hover:cursor-pointer items-center">
       <i className="fa-solid fa-headphones-simple text-[40px]"></i>
        <span className="pl-1.5 text-[25px] font-bold">Va Music</span>
      </div></Link>
      <div className="mt-7 ml-1 relative">
          <ul>
          {MenuItems.map((item,index)=> (
            <li key={index}
            className="font-bold text-[16px] pt-4 text-text1 hover:text-textwhite duration-200 ">
            <NavLink to={item.url}
            className="block w-full" 
            style={linkActive}
            >
              <i className={`${item.icon} mr-4 text-[20px] h-[20px] w-[20px] `}></i>{item.title}</NavLink>
            </li>
          ))}
          </ul>
      </div>
     </div>
     <div className="mt-[30px] relative">
      <div className="">
      <ul>
      <li className="pt-4 text-text1 hover:text-textwhite duration-200">
        <NavLink to='/library/fav_songs'  className="font-bold text-[16px] block w-full" style={linkActive}>
          <i className="fa-solid fa-heart-circle-plus mr-4 text-[20px] h-[20px] w-[20px]"></i>Bài hát yêu thích</NavLink>
        </li>
        <li className="text-[16px] pt-4 text-text1 hover:text-textwhite duration-200 font-bold cursor-pointer">
        <a href="https://github.com/ndvanh/React-MusicPlayer" className="block w-full" target="_blank" rel="noopener noreferrer"> 
        <i className="fa-regular fa-circle-down mr-4"></i> Cài đặt ứng dụng</a>
        </li>
      </ul>
      </div>
      <div className="pr-[20px]  pt-4">
        <div className="bg-mainblack4 h-[1px] w-full"></div>
      </div>
     <div>
     <ul>
      <li className="pt-4 text-text1 hover:text-textwhite duration-200 ">
        <NavLink to='/playlist'  className="font-bold text-[16px] block w-full" style={linkActive}>
          Va Music Playlist</NavLink></li>
      </ul>
     </div>
      </div>
    </nav>
  )
}
export default memo(Navbar)
