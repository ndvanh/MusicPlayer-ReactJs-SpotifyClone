import Button from './Button'
import {Play} from '../icons/play/index'

export default function PlayButton() {
  return (
    <div className="rounded-full absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 group-hover:animate-move duration-300 shadow-[0_2px_20px_5px_rgba(0,0,0,0.3)]">
        <Button p='12px' title='play'><Play/></Button>
    </div>
  )
}
