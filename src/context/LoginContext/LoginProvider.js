import { useMemo } from 'react'
import { useLogin } from '../../hooks/index'
import {LoginCon} from './LoginContext'

export default function LoginProvider({children}) {
  const [showFormLogin,setShowFormLogin,userLogin] = useLogin()
  const toggleLoginForm = () => {
    setShowFormLogin(!showFormLogin)
  }
  const loginValue = useMemo(()=>{
    return {
      showFormLogin,
      setShowFormLogin,
      userLogin,
      toggleLoginForm
    }
  },[showFormLogin, userLogin])
  return (
    <LoginCon.Provider 
    value={loginValue}>
      {children}
    </LoginCon.Provider>
  )
}
