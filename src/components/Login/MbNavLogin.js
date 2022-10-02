export default function MbNavLogin({loginNav}) {
  return (
    <div className="mt-7 flex items-center flex-col">
    <img alt="user" className="h-[100px] w-[100px]" src={require('../../assets/images/user.png')} />
      <span onClick={loginNav} className="font-bold text-[16px] cursor-pointer text-text1 mt-7">Đăng nhập</span>
    </div>
  )
}
