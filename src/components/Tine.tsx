import { FC } from "react"

type TineProps = {
  note: string
}

const Tine: FC<TineProps> = (props): JSX.Element => {
  // let tineSound = new Audio('537519__a_curious_coder__kalimba-scale-descending.wav')]

  const soundPath = ''

  const play = () => {
    let audio: HTMLAudioElement = document.getElementById("audio") as HTMLAudioElement
    audio.play()
  }

  const noteTimes = () => {
    let times = [0, 0]
    console.log(props.note)
    switch (props.note) {
      case 'a':
        times = [0, 0.3]
        break;
      case 'b':
        times = [0.3, 0.6]
        break;
      case 'c':
        times = [0.9, 1.2]
        break;
      case 'd':
        times = [1.2, 1.5]
        break;
      case 'e':
        times = [1.5, 1.8]
        break;
      case 'f':
        times = [1.8, 2.1]
        break;
      case 'g':
        times = [2.1, 2.4]
        break;
      default:
        return null
    }
    //string to add to audio src to limit time
    let timesString = `#t=${times[0]},${times[1]}`
    return timesString
  }

  return <>
    <input type="button" value={`PLAY ${props.note}`} onClick={play} />
    <audio
      id="audio"
      src={`537519__a_curious_coder__kalimba-scale-descending.wav${noteTimes()}`}>
    </audio>
    {/* <button onClick={tineSound.play}>TineSound</button> */}
  </>
}

export default Tine