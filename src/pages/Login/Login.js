import {memo, useContext,useEffect } from "react"
import {useForm} from "react-hook-form"
import { LoginCon } from "../../context/LoginContext/LoginContext"
import { signInWithGoogle } from "../../service/firebase"

function Login() {
  const {showFormLogin,setShowFormLogin,userLogin,toggleLoginForm} =  useContext(LoginCon)
  const { register, handleSubmit,formState:{errors} } = useForm();
  const onSubmit = (data) => {
    alert('Tính năng đang phát triển, bạn hãy đăng nhập bằng Google')
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  useEffect(()=>{
    if(userLogin) {
      setShowFormLogin(false)
    }
  },[userLogin])
  return (
    <>
    {showFormLogin &&
     <div>
    <div className="fixed cursor-pointer top-0 bottom-0 left-0 right-0 bg-mainblack1 opacity-70 z-20 " onClick={toggleLoginForm}></div>
    <div className="bg-white rounded-[5px] text-mainpurple animate-showLogin fixed w-[400px] z-20 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] px-[30px] py-[20px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center text-[30px]">Đăng Nhập</h3>
        <div className="w-full mt-2 h-[1px] bg-mainpurple" />
        <div>
        <div className="mt-6">
          <label className="text-[18px]">Tài khoản</label> <br/>
        <input 
        {...register('taikhoan',{
          required:true,
          pattern: emailRegex,
        })} 
            autoFocus
            name="taikhoan"
            type="email" 
            placeholder="Nhập email"
            className="w-full mt-3 rounded-[999px] border-mainpurple border-2 focus:border-[#8e44ad]  focus:outline-none placeholder-mainpurple px-3 py-2 bg-transparent text-mainpurple"
         /> 
         {errors.taikhoan?.type === 'required' && <span className="text-[#ee5253] mt-1 block">Hãy nhập email của bạn</span>}
         {errors.taikhoan?.type === 'pattern' && <span className="text-[#ee5253] mt-1 block">Định dạng email không hợp lệ</span>}
        </div>
        <div className="mt-6">
        <label className="text-[18px]">Mật khẩu</label> <br/>
        <input {...register('matkhau',{
          required:true,
          minLength:6
        })} 
            name="matkhau" 
            type="password" 
            placeholder="Nhập password" 
            className="w-full mt-3 rounded-[999px] border-mainpurple border-2 focus:border-[#8e44ad]  focus:outline-none placeholder-mainpurple px-3 py-2 bg-transparent text-mainpurple"
        />
        {errors.matkhau?.type === 'required' && <span className="text-[#ee5253] mt-1 block">Hãy nhập mật khẩu của bạn</span>}
        {errors.matkhau?.type === 'minLength' && <span className="text-[#ee5253] mt-1 block">Mật khẩu chứa ít nhất 6 kí tự</span>}
        </div>
        <div>
        <input type="submit" value="Đăng Nhập" className="text-textwhite p-2 mt-8 rounded-[999px] text-[18px] w-full bg-mainpurple cursor-pointer"/> 
        </div>
        </div>
      </form>
      <div className="flex items-center justify-center mt-3" onClick={signInWithGoogle}>
      <i className="fa-brands fa-google"></i>
      <h4 className="cursor-pointer ml-2">Hoặc đăng nhập với Google</h4>
    </div>
    </div> 
    </div> 
    }
    </>
  )
}
export default memo(Login)
