import axios from 'axios'

const getAllNotes = (notes) => {
    return {
        type: 'GET_ALL_TASKS',
        payload: notes
    }
}

const startGetNotes = () => {
    return (dispatch) => {
        axios.get('https://dct-user-auth.herokuapp.com/api/notes',{
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response) =>{
            const allNotes = response.data
            dispatch(getAllNotes(allNotes))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export default startGetNotes