import {useEffect} from 'react'
import { useLocation } from "react-router-dom"

export default function ScrolltoTop() {
const curPosition = useLocation() 
useEffect(() => {
   window.scrollTo(0,0)
},[curPosition])
  return null
}