const initialStateValue = false

const userLoggedInReducer = (state = initialStateValue, action) => {
    switch(action.type) {
        case 'TOGGLE_STATE': {
            return !state
        }
        default: {
            return state
        }
    }
}

export default userLoggedInReducer