import { FC } from 'react'
import { Note } from "./Tine"

type NotesHistoryProps = {
    notesHistory: Note[]
}

const NotesHistory: FC<NotesHistoryProps> = (props) => {
    return <div>Notes history: {props.notesHistory}</div>
}

export default NotesHistory