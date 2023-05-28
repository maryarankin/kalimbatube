import { FC, useRef } from "react"

type TineProps = {
  note: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'
}

const Tine: FC<TineProps> = (props): JSX.Element => {
  // let tineSound = useRef(document.createElement('HTMLAudioElement'))
  // ...
  // let tineSound = new Audio('537519__a_curious_coder__kalimba-scale-descending.wav')

  const soundPath = ''

  const play = () => {
    let audio: HTMLAudioElement = document.getElementById(`note${props.note}`) as HTMLAudioElement
    audio.play()
  }
  
  const noteTimes = () => {
    let time = {
    'a': [0, 0.3],
    'b': [0.3, 0.6],
    'c': [0.3, 0.6],
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
    <input type="button" value={`PLAY ${props.note}`} onClick={play} />
    <audio
      id={`note${props.note}`}
      src={`537519__a_curious_coder__kalimba-scale-descending.wav${noteTimes()}`}>
    </audio>
    {/* <button onClick={tineSound.play}>TineSound</button> */}

    {/* <button onClick={tineSound.current.play}>TineSound</button> */}
  </>
}

export default Tine