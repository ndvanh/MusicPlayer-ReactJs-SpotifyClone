import { useContext } from "react"
import { LoginCon } from "../../context/LoginContext/LoginContext"
import { Button } from "../Buttons"

export default function LoginBtn() {
    const {toggleLoginForm} =  useContext(LoginCon)
  return (
    <>
    <div className="ml-[30px] font-bold lg:hidden">
            <Button background='#2c261e' color='white' p='5px 15px' onClick={toggleLoginForm}>Đăng nhập</Button>
    </div>
    <div className="font-bold hidden lg:block">
            <Button background='#2c261e' color='white' p='5px 10px' onClick={toggleLoginForm}><i className="fa-solid fa-user"></i></Button>
    </div>
    </>
  )
}
