import axios from 'axios'

const deleteNote = (note) => {
    return {
        type: 'DELETE_NOTE',
        payload: note
    }
}

const startDeleteNote = (_id) => {
    return (dispatch) => {
        axios.delete(`https://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const deletingNote = response.data 
                dispatch(deleteNote(deletingNote))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export default startDeleteNote