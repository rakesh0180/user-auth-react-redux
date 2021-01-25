import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Button, Paper } from '@material-ui/core'
import swal from 'sweetalert'
import startDeleteNote from '../actions/startDeleteNote'

const NoteItem = (props) => {
    const { _id, title } = props 

    const dispatch = useDispatch()

    const showInfo = (_id) => {
        axios.get(`https://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data 
                swal(`${result.title}`, `${result.body}`,'success')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const handleRemove = (_id) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove) {
            dispatch(startDeleteNote(_id))
            swal("Cool!", "Deleted note successfully!", "success")
        }
    }

    return (
        <Paper>
            <div className='textAlign'>
                <h2 onClick={() => {
                    showInfo(_id)
                }}> {title} </h2>
                 <Button variant="contained" color="secondary" onClick={() => {
                        handleRemove(_id)
                    }}>
                        delete
                </Button>
            </div>
        </Paper>
    )
}

export default NoteItem
