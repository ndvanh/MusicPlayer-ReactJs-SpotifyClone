import { useContext } from 'react'
import { LoginCon } from '../../context/LoginContext/LoginContext'
import {Link} from 'react-router-dom'

export default function MbNavLogged({closeMbNav}) {
    const {userLogin} =  useContext(LoginCon)
  return (
    <>
    <Link to='user_info' onClick={closeMbNav}>
    <div className="mt-7 flex items-center flex-col">
         <img alt="user" className="h-[100px] w-[100px] rounded-full" src={userLogin.photoURL} />
        <span className="font-bold text-[16px] cursor-pointer text-text1 mt-7">{`Xin chào, ${userLogin.displayName}`}</span>
     </div>
     </Link>
    </>
  )
}
