import axios from '../config/axios'

export const startRegisterUser = (formData, handleRedirect) => {
    return (dispatch) => {
        axios.post('/users/register',formData)           
                .then((response) => {
                    const result = response.data 
                    if(result.hasOwnProperty('errors')) {
                        alert(result.message)
                    } else {
                       handleRedirect()
                    }
                })
                .catch((err) => {
                    console.log(err.message)
                })

    }
}

export const startLoginUser = (formData, handleRedirect) => {
    return (dispatch) => {
        axios.post('/users/login',formData)
        .then((response) => {
            const result = response.data
            //Object.keys(result).includes('errors')
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                localStorage.setItem('token', result.token)
                handleRedirect()
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}