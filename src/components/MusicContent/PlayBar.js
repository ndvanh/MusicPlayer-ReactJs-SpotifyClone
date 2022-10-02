import { useContext,useRef,useState,useEffect } from 'react'
import Unmute from '../icons/speaker/Unmute'
import {Loop,Loop1,Next,Prev,Play,Pause} from '../icons/play/index'
import {Button} from '../../components/Buttons/index'
import { Songs } from '../../context/MusicContext'

export default function PlayBar() {
  const {thesong,handleSong,recSong,setRecSong} = useContext(Songs)
  const animationRef = useRef(null)
  const speakerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const togglePlaying = () => {
    if(!isPlaying){
      speakerRef.current.play()
      // run thanh time
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
    else{
      speakerRef.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
    setIsPlaying(!isPlaying)
  }

  const probarRef = useRef(null)
  const [duration,setDuration] = useState(0) 
  const [curTime,setCurTime] = useState(0) 

// run thanh time
  const whilePlaying = () => {
    probarRef.current.value = speakerRef.current.currentTime 
    setCurTime(probarRef.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const calcTime = (secs) =>{
    const minutes = Math.floor(secs/60)
   // const returnMinutes = minutes<10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs%60)
    const returnSeconds = seconds<10 ? `0${seconds}` : `${seconds}`
    return `${minutes}:${returnSeconds}`
  }
 
  const onLoadedMetadata = () => {
    const sec = Math.floor(speakerRef.current.duration)
    setDuration(sec)
    probarRef.current.max = sec
    if(isPlaying){
      speakerRef.current.play()
    }
  }

  const changeRange = () => {
    speakerRef.current.currentTime = probarRef.current.value
    setCurTime(probarRef.current.value)
  }

  const handleNext = () => handleSong(thesong.id +1)
  const handlePrev= () => handleSong(thesong.id -1)
  const isEnded = () => handleNext()
  const handleVolumeChange = (e) => speakerRef.current.volume = e.target.value/100
  
useEffect(() => {
  if(isPlaying) {
    document.title = `${thesong.name} - ${thesong.author}`
  }
  else {
    document.title = 'Va Music'
  }
})

const [loop,setLoop] = useState(false)
const toggleLoop = () => {
  if(!loop) {
    speakerRef.current.loop = true
  }
  else {
    speakerRef.current.loop = false
  }
  setLoop(!loop)
}

const MbNavRef = useRef(null)
const toggleMbNav = () => { 
  if(MbNavRef.current.style.width === '0px'){
  MbNavRef.current.style.width = '100%'
  MbNavRef.current.style.padding = '0px 32px'
 
  }
  else{
    MbNavRef.current.style.width = '0px'
    MbNavRef.current.style.padding = '0px'
  }
}

// check gần đây
useEffect(() => {
    setRecSong(prev => {
      if(isPlaying){
        if(recSong.some(song => song.id === thesong.id)){
          localStorage.setItem('list_rec_played',JSON.stringify([...prev]))
          return  [...prev]
        }
        else {
          localStorage.setItem('list_rec_played',JSON.stringify([...prev,thesong]))
          return [...prev,thesong]
        }
      }
      else {
        return [...prev]
      }
    })
},[isPlaying,thesong])
  return (
    <>
    {thesong && 
    <div className="bg-mainblack2 py-2 px-4 bottom-0 fixed w-screen h-[90px] border-t-[1px] border-[#454546] text-textwhite sm:bottom-[-2px] sm:w-full sm:top-[84px] sm:right-0 sm:h-screen sm:px-8 sm:duration-300" ref={MbNavRef}>
     <div className="hidden sm:block absolute right-4 top-4 p-1 bg-mainpurple rounded-full" onClick={toggleMbNav}><i className="fa-solid fa-rotate text-textwhite text-[25px] cursor-pointer"></i></div>
     <div className=" flex items-center justify-between sm:block sm:mt-16 sm:overflow-hidden sm:h-full">
      <div className="flex items-center basis-3/12 sm:block  ">
      <div>
      <img alt={`${thesong.name}`} 
      src={thesong.links.images[1].url} 
      className="h-[56px] w-[56px] md:h-[40px]  md:w-[40px] sm:h-[250px] sm:w-[250px] sm:rounded-full sm:mx-auto"
      loading='lazy'
      /></div>
      <div className="ml-3 ">
        <div className=""><span className="capitalize font-bold cursor-pointer text-[15px] md:text-[10px] sm:text-[30px] sm:py-5 sm:block sm:overflow-hidden sm:whitespace-nowrap sm:text-ellipsis sm:text-center" draggable="true">{thesong.name}</span></div>
        <div><span className="text-text1 cursor-pointer text-[12px] md:text-[10px] sm:text-[20px] sm:block sm:text-center" draggable="true">{thesong.author}</span></div>
      </div>
      </div>
      <div className="basis-6/12 sm:basis-0 text-center sm:relative sm:top-[60px]">
        <div className="mb-2 mt-1">
        <audio  
        src={thesong.url} 
        ref={speakerRef} 
        onLoadedMetadata={onLoadedMetadata} 
        onEnded={isEnded}
        />
       <div className="flex justify-center sm:justify-center items-center">
       <div className="relative top-2 right-[50px]" > <Button title='prev' background='none' onClick={handlePrev}><Prev/></Button></div>
        <div><Button p='8px' onClick={togglePlaying}>{isPlaying ? <Pause/> : <Play/>}</Button></div>
        <div className="relative top-2 left-[50px] "><Button title='next' background='none' onClick={handleNext}><Next/></Button></div>
        </div>
       </div>
        <div className="flex items-center sm:mt-16 sm:block ">
            <span className="relative left-[-10px] sm:absolute sm:bottom-[20px] sm:left-[10px]">{calcTime(curTime)}</span> 
          <input 
        min="0" max="100" defaultValue="0" step="1"
        type="range" 
        className="w-full cursor-pointer sm:h-[8px] rounded-full" 
        ref={probarRef}
        onChange={changeRange}
        title='Chỉnh thời gian'
       />
       <span className="relative right-[-10px] sm:absolute sm:bottom-[20px] sm:right-[10px]">{(duration && !isNaN(duration)) && calcTime(duration)}</span>
        </div>    
      </div>
      <div className="flex items-center basis-3/12 sm:basis-0 justify-end mr-2">
     <div className="mr-3 sm:absolute sm:bottom-[308px] sm:left-[85%]">
       <Button title='Lặp bài hát' background='none' onClick={toggleLoop}>
        {loop ? <Loop1/> : <Loop/> }
      </Button></div>
       <div className="mr-3"> <Button background='none'><Unmute/></Button></div>
        <input 
        min="0" max="100" defaultValue="100" step="1"
        type="range" 
        className="cursor-pointer md:hidden rounded-full mb-[5px]" 
        onChange={handleVolumeChange}
        title='Âm lượng'
        />
      </div>
     </div>
    </div> }
    </>
  )
}
