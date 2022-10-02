import { useContext, useEffect } from 'react'
import { LoginCon } from '../../context/LoginContext/LoginContext'

export default function PrivateLoginRoute() {
    const {toggleLoginForm} =  useContext(LoginCon)
    useEffect(() => {
        toggleLoginForm()
    },[])
    return <div className="text-textwhite px-8 py-6">
                 <h1 className="font-bold text-[25px] sm:text-[20px]">Đăng nhập để xem các bài hát yêu thích</h1>
           </div>
}
