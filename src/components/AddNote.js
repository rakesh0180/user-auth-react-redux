import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import swal from 'sweetalert'
import startPostNote from '../actions/startPostNote'
import '../App.css'

const AddNote = (props) => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleInputChange = (e) => {
        const attr = e.target.name
        if(attr === 'title') {
            setTitle(e.target.value)
        } else {
            setBody(e.target.value)
        }
    }

    const resetForm = () => {
        setTitle('')
        setBody('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            title,
            body
        }

        dispatch(startPostNote(formData))
        swal("Cool!", "Added note successfully!", "success")

        resetForm()
    }

    return (
        <div>
            <Paper elevation={3}>
            <h2 className='textAlign'>Add Note</h2>
                <form onSubmit={handleSubmit}>

                     <TextField 
                        variant='outlined'
                        label='Title'
                        name='title'
                        value={title}
                        onChange={handleInputChange}
                    /> <br /><br />
                    
                    <TextField 
                        variant='outlined'
                        label='Body'
                        name='body'
                        name='body'
                        value={body}
                        onChange={handleInputChange}
                    /> <br /><br />

                     <Button variant="contained" color="primary" type='submit' style={{'marginLeft' :'80px'}}>
                            save
                    </Button>

                </form>
            </Paper>
        </div>
    )
}

export default AddNote
