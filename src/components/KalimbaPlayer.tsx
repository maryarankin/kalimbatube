import Kalimba from '../components/Kalimba'
import NotesHistory from '../components/NotesHistory'
import { useState } from 'react'
import { Note } from "./Tine"




const KalimbaPlayer = () => {
    const [notesHistory, setNotesHistory] = useState<Note[]>([])

    return <> 
        <Kalimba setNotesHistory={setNotesHistory}/> 
        <NotesHistory notesHistory={notesHistory}/>
        <button onClick={() => setNotesHistory([])}>clear</button>
    </>
}

export default KalimbaPlayer