import { FC, Dispatch, SetStateAction } from 'react'
import { Tine, Note } from "./Tine"

type KalimbaProps = {
    setNotesHistory: Dispatch<SetStateAction<Note[]>>
}

const Kalimba: FC<KalimbaProps> = (props) => {
    

    return <>
        <div className="flex justify-around border h-1/2 w-1/2 rounded-lg bg-amber-800">
            <Tine note="a" setNotesHistory={props.setNotesHistory}/>
            <Tine note="b" setNotesHistory={props.setNotesHistory}/>
            <Tine note="c" setNotesHistory={props.setNotesHistory}/>
            <Tine note="d" setNotesHistory={props.setNotesHistory}/>
            <Tine note="e" setNotesHistory={props.setNotesHistory}/>
            <Tine note="f" setNotesHistory={props.setNotesHistory}/>
            <Tine note="g" setNotesHistory={props.setNotesHistory}/>
        </div>
    </>
}

export default Kalimba