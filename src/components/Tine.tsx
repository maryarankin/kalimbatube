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
        break
    }
    //string to add to audio src to limit time
    let timesString = `#t=${times[0]},${times[1]}`
    return timesString
  }

  return <>
    <input type="button" value="PLAY" onClick={play} />
    <audio
      id="audio"
      src={`537519__a_curious_coder__kalimba-scale-descending.wav${noteTimes()}`}>
    </audio>
    {/* <button onClick={tineSound.play}>TineSound</button> */}
  </>
}

export default Tine