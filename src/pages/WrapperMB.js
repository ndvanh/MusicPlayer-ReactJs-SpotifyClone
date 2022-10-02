import { useContext,useState,useEffect } from "react"
import { Songs } from "../context/MusicContext"

export default function WrapperMB({children}) {
    const {thesong} = useContext(Songs)
    const [mb,setMb] = useState("")
    useEffect(() => {
        const styleMb = thesong ? "mb-[80px]" : ""
        setMb(styleMb)
    },[thesong])
  return (
    <div className={mb}>{children}</div>
  )
}
