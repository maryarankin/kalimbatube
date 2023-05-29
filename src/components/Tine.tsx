import { FC, SetStateAction, useRef, Dispatch } from "react"

export type Note = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'

type TineProps = {
  note: Note,
  setNotesHistory: Dispatch<SetStateAction<Note[]>>
}

export const Tine: FC<TineProps> = (props): JSX.Element => {
  // let tineSound = useRef(document.createElement('HTMLAudioElement'))
  // ...
  // let tineSound = new Audio('537519__a_curious_coder__kalimba-scale-descending.wav')

  const soundPath = ''

  const play = () => {
    props.setNotesHistory(notesHistory => {
      return [...notesHistory, props.note]
    })
    let audio: HTMLAudioElement = document.getElementById(`note${props.note}`) as HTMLAudioElement
    
    audio.play()
  }
  
  const noteTimes = () => {
    let time = {
    'a': [0, 0.3],
    'b': [0.4, 0.8],
    'c': [0.9, 1.2],
    'd': [0.3, 0.6],
    'e': [0.3, 0.6],
    'f': [0.3, 0.6],
    'g': [0.3, 0.6]
    }[props.note]

    //string to add to audio src to limit time
    let timesString = `#t=${time[0]},${time[1]}`
    return timesString
  }

  return <>
    {console.log(noteTimes())}
    <input className="bg-slate-300 mb-5 w-4 rounded-b-lg text-black" type="button" value={`${props.note}`} onClick={play} />
    <audio
      id={`note${props.note}`}
      src={`537519__a_curious_coder__kalimba-scale-descending.wav${noteTimes()}`}>
    </audio>
    {/* <button onClick={tineSound.play}>TineSound</button> */}

    {/* <button onClick={tineSound.current.play}>TineSound</button> */}
  </>
}
