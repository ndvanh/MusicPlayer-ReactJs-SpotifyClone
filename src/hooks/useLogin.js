import {  useState,useEffect } from "react"
import firebase from '../service/firebase'

export default function useLogin() {
  const  [showFormLogin,setShowFormLogin] = useState(false)
  const [userLogin,setUserLogin] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => { // q sát trạng thái login?
      setUserLogin(user)
    })
  }, [])
  return [showFormLogin,setShowFormLogin,userLogin]
}
