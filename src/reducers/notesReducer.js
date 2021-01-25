const initialStateValue = []

const notesReducer = (state = initialStateValue, action) => {
    switch(action.type) {
        case 'GET_ALL_TASKS' : {
            return [...action.payload]
        }
        case 'ADD_NOTE' : {
            return [...state,action.payload]
        }
        case 'DELETE_NOTE' : {
            return state.filter((note) => {
                return note._id !== action.payload._id
            })
        }
        default : {
            return state
        }
    }
}

export default notesReducer