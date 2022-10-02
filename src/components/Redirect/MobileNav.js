import {forwardRef,memo, useContext } from 'react'
import {MenuItems} from '../../data/NavItems'
import {NavLink} from 'react-router-dom'
import { LoginCon } from '../../context/LoginContext/LoginContext'
import { MbNavLogged, MbNavLogin } from '../Login/index'

const MobileNav = (props,ref) => {
  const {userLogin,toggleLoginForm} = useContext(LoginCon)
  const linkActive = ({isActive}) => ({
    color : isActive ? 'white' : ''
  })
  const closeMbNav = () => {
    ref.current.style.width = '0'
  }
  const loginNav = () => {
    closeMbNav()
    toggleLoginForm()
  }
  return (
    <nav className=" bg-mainblack3 h-screen fixed w-0 z-20 overflow-x-hidden top-0 duration-300 text-center" ref={ref} >
        <div className="absolute right-4 top-3" onClick={closeMbNav}><i className="fa-regular fa-circle-xmark text-textwhite text-[25px] cursor-pointer"></i></div>
      {userLogin ? <MbNavLogged closeMbNav={closeMbNav} />  : <MbNavLogin loginNav={loginNav}/>}
      <div className="mt-6 ml-1 relative">
          <ul>
          {MenuItems.map((item,index)=> (
            <li key={index} onClick={closeMbNav}
            className="font-bold text-[16px] pt-4 text-text1 duration-200 ">
            <NavLink to={item.url}
            className="block w-full p-[20px]" 
            style={linkActive}
            >
              <i className={`${item.icon} mr-4 text-[20px] h-[20px] w-[20px] `}></i>{item.title}</NavLink>
            </li>
          ))}
          </ul>
      </div>
     <div className="relative">
      <div className="">
      <ul>
      <li className="pt-4 text-text1 duration-200" onClick={closeMbNav}>
        <NavLink to='/library/fav_songs'  className="font-bold text-[16px] p-[20px] block w-full" style={linkActive}>
          <i className="fa-solid fa-heart-circle-plus mr-4 text-[20px] h-[20px] w-[20px]"></i>Bài hát yêu thích</NavLink>
        </li>
      </ul>
      </div>
      <div className="pr-[20px]  pt-4">
        <div className="bg-mainblack4 h-[1px] w-full"></div>
      </div>
     <div>
     <ul>
      <li className="pt-4 text-text1 duration-200 " onClick={closeMbNav}>
        <NavLink to='/playlist'  className="font-bold text-[16px] p-[20px] block w-full" style={linkActive}>
          Va Music Playlist</NavLink></li>
      </ul>
     </div>
      </div>
    </nav>
  )
}
export default memo(forwardRef(MobileNav))
