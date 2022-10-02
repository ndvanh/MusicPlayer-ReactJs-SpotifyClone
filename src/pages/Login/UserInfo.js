import { useContext } from "react"
import {Button} from '../../components/Buttons/index'
import { logOut } from "../../utils/Utlis"
import { LoginCon } from "../../context/LoginContext/LoginContext"

export default function UserInfo() {
  const {userLogin} =  useContext(LoginCon)
  return (
    <div className="text-textwhite  px-8 py-4"> 
    {userLogin ? 
    <div>
       <h1 className="font-bold text-[25px]">Tài khoản của bạn</h1>
      <div className="grid grid-cols-3 gap-5 mt-5 lg:grid-cols-1">
      <div className="p-7 bg-mainblack2 rounded-[5px] flex justify-center lg:hidden">
      <img alt={userLogin.displayName} src={userLogin.photoURL} className="rounded-full" referrerPolicy="no-referrer"/>
      </div>
      <div className="p-7 bg-mainblack2 rounded-[5px] col-span-2">
     <ul>
     <li className="mb-5"><b>Tên tài khoản:</b> {userLogin.displayName}</li>
     <li className="mb-5"><b>Địa chỉ Email:</b> {userLogin.email}</li>
     <li className="mb-5"><b>Lần đầu đăng nhập:</b> {userLogin.metadata.creationTime}</li>
     <li className="mb-5"><b>Lần đăng nhập gần nhất:</b> {userLogin.metadata.lastSignInTime}</li>
     </ul>
     <div className="mt-14"><Button onClick={logOut} title="Đăng xuất" p="5px 15px" background="#6c47ff" color="white">Đăng xuất</Button> </div>
      </div>
      </div>
    </div> : 
    <h1 className="text-[25px] font-bold">Bạn chưa đăng nhập</h1>}
    </div>
  )
}
