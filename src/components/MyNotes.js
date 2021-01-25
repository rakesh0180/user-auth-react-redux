import React from 'react'
import AddNote from './AddNote'
import NotesList from './NotesList'
import '../App.css'

const MyNotes = (props) => {

    return (
        <div className='alignComponents'>
            <NotesList />
            <AddNote />
        </div>
    )
}

export default MyNotes
