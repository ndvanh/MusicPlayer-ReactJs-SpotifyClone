import { useContext } from "react"
import { Link } from "react-router-dom"
import { LoginCon } from "../../context/LoginContext/LoginContext"
import { logOut } from "../../utils/Utlis"

export default function LoggedBtn() {
    const {userLogin} =  useContext(LoginCon)
  return (
    <>
    <div className="group flex bg-[#282828] items-center cursor-pointer px-[15px] py-[5px] lg:p-1  rounded-full relative after:absolute after:w-full after:top-[100%] after:h-4 after:right-0">
            <img alt={userLogin.displayName} src={userLogin.photoURL} referrerPolicy="no-referrer" className="h-[24px] w-[24px] rounded-full mr-2 lg:mr-0 lg:h-[35px] lg:w-[35px]"/>
            <div className="lg:hidden">{userLogin.displayName}</div>
            <div className=" hidden group-hover:block group-hover:animate-fadeinfo lg:group-hover:hidden absolute bg-[#282828] top-[120%] right-0 p-3 rounded-[2px] before:absolute before:top-[-18px] before:right-[10px] before:border-[10px] before:border-t-transparent before:border-r-transparent before:border-b-[#282828] before:border-l-transparent">
            <ul>
              <li className="text-text1 hover:text-textwhite duration-200">
                <Link to='user_info'>Tài khoản của bạn</Link>
              </li>
              <li className="mt-2 text-text1 hover:text-textwhite duration-200" onClick={logOut}> Đăng xuất</li>
            </ul>
            </div>
    </div>
    </>
  )
}
