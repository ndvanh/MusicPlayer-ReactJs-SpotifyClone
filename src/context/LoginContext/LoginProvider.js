import { useLogin } from '../../hooks/index'
import {LoginCon} from './LoginContext'

export default function LoginProvider({children}) {
  const [showFormLogin,setShowFormLogin,userLogin] = useLogin()
  const toggleLoginForm = () => {
    setShowFormLogin(!showFormLogin)
  }
  return (
    <LoginCon.Provider 
    value={{
            showFormLogin:showFormLogin,
            setShowFormLogin:setShowFormLogin,
            userLogin:userLogin,
            toggleLoginForm:toggleLoginForm
      }}>
      {children}
    </LoginCon.Provider>
  )
}
