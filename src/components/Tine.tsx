const Tine = () => {
  // let tineSound = new Audio('537519__a_curious_coder__kalimba-scale-descending.wav')]

  const play = () => {
    let audio: HTMLAudioElement = document.getElementById("audio") as HTMLAudioElement
    audio.play()
  }

  return <>
    <input type="button" value="PLAY" onClick={play} />
    <audio id="audio" src="537519__a_curious_coder__kalimba-scale-descending.wav"></audio>
    {/* <button onClick={tineSound.play}>TineSound</button> */}
  </>
}

export default Tine