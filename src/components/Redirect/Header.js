import {useContext, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '../Buttons/index'
import { LoginCon } from '../../context/LoginContext/LoginContext'
import { LoggedBtn, LoginBtn } from '../Login/index'
import {MobileNav} from './index'

function Header() {
  const navigate = useNavigate()
  const nextPage =() => navigate(1)
  const prevPage =() => navigate(-1)
  const {userLogin} =  useContext(LoginCon)
  const mbNavRef = useRef()
  const openMbNav = () =>{
    mbNavRef.current.style.width='100%'
  }
    return (
     <>
      <header className=" text-textwhite py-4 px-8 flex justify-between items-center sticky top-0 bg-mainpurple ml-[250px] lg:ml-0 md:ml-0 sm:ml-0 z-[1]">
        <div className="flex lg:hidden">
         <div> 
          <Button background='#282828' h='32px' w='32px' title='quay lại' onClick={prevPage}>
            <i className="fa-solid fa-angle-left text-[22px] leading-[32px] text-text1"></i>
          </Button></div>
          <div className="ml-[18px]">
            <Button background='#282828' h='32px' w='32px' title='quay lại' onClick={nextPage}>
            <i className="fa-solid fa-angle-right text-[22px] leading-[32px] text-text1"></i>
            </Button></div>
        </div>
         {/* tablet mobile content */}
        <div className="items-center hidden lg:flex cursor-pointer " onClick={openMbNav}><i className="fa-solid fa-bars text-[35px]"></i></div>
        <div className="hidden lg:block">
        <Link to='/'>
           <div className="flex hover:cursor-pointer items-center">
             <i className="fa-solid fa-headphones-simple text-[35px]"></i>
            <span className="pl-1.5 text-[35px] font-bold">Va Music</span>
            </div>
        </Link>
        </div>
         {/* end tablet mobile content */}
          {userLogin ? <LoggedBtn/> : <LoginBtn/>}
      </header>
       <MobileNav ref={mbNavRef}/>
     </>
    )
  }
export default Header