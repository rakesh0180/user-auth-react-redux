import { Paper } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import NoteItem from './NoteItem'

const NotesList = (props) => {
    const notes = useSelector(state => state.notes)

    return (
        <div>
            <Paper>
                <h1>My Notes - {notes.length}</h1>
            </Paper>
            {notes.length === 0 ? (
                <Paper>
                    <h2>No notes found , add your first note.</h2>
                </Paper>
            ) : (
                <div>
                    {notes.map((note) => {
                        return <NoteItem 
                                key={note._id}
                                {...note}
                        />
                    })}
                </div>
            )}
        </div>
    )
}

export default NotesList
