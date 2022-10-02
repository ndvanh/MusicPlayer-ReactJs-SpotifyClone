import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

export default function Lib() {
  const linkActive = ({isActive}) => ({
    backgroundColor : isActive ? '#333333' : '',
  })
  return (
    <div className=" text-textwhite sm:ml-0 ">
      <div className="px-8 py-6">
      <nav className="mt-5">
     <span className="font-bold text-[20px] rounded-[2px] cursor-pointer"> 
     <NavLink to='/library/lib_playlist'  style={linkActive} className="px-10 py-5 rounded-[5px]">Playlist</NavLink></span>
      <span className="font-bold text-[20px] ml-5 rounded-[2px] cursor-pointer">
        <NavLink to='/library/lib_artists'  style={linkActive} className="px-10 py-5 rounded-[5px]">Nghệ sĩ</NavLink></span>
      </nav>
    <div className='py-8'>
    <Outlet />
    </div>
    </div>
    </div>
  )
}
