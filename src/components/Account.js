import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Paper } from '@material-ui/core'
import '../App.css'

const Account = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
            setUser(result)
        })
        .catch((err) => {
            console.log(err.message)
        })

    }, [])

    return (
        <div className='detailsDiv'>
            <Paper elevation={3}>
                <h2>Username - {user.username && user.username}</h2>
                <h2>Email - {user.email && user.email}</h2>
                <h2>Join Date - {user.createdAt && user.createdAt.slice(0,10)}</h2>
            </Paper>
        </div>
    )
}

export default Account
