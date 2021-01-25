import axios from 'axios'

const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        payload: note
    }
}

const startPostNote = (note) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/api/notes', note ,{
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(addNote(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export default startPostNote