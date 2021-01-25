import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import validator from 'validator'
import axios from 'axios'
import toggleStatus from '../actions/toggleStatus'
import { Button, Paper, TextField } from '@material-ui/core'
import swal from 'sweetalert'

const Login = (props) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleInputChange = (e) => {
        const attr = e.target.name
        
        if(attr === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const runValidations = () => {
        
        //email
        if(email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if(!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }

        //password
        if(!(password.length > 8 && password.length < 128)) {
            errors.password = 'password should be between 8 and 128 characters'
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                email: email,
                password: password
            }

            axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
                .then((response) => {
                    const result = response.data
                    //Object.keys(result).includes('errors')
                    if(result.hasOwnProperty('errors')) {
                        alert(result.errors)
                    } else {
                        localStorage.setItem('token', result.token)
                        props.history.push('/')
                        swal("Cool!", "You have logged in successfully!", "success")
                        dispatch(toggleStatus())
                    }
                })
                .catch((err) => {
                    console.log(err.message)
                })
    
            resetForm()


        } else {
            setFormErrors(errors)
        }

    }

    return (
        <div className='formDiv'>
        <Paper elevation={3}>
            <h1>Login to your account</h1><br /><br />
            <form onSubmit={handleSubmit}>

                <TextField 
                        variant='outlined' 
                        label='Email' 
                        value={email} 
                        onChange={handleInputChange} 
                        name='email'
                        error={formErrors.email && <span>{formErrors.email}</span>}
                    /><br />
                {formErrors.email && <span style={{color:'red'}}> { formErrors.email } </span>}<br />

                <TextField 
                        variant='outlined' 
                        label='Password' 
                        value={password} 
                        onChange={handleInputChange} 
                        error={formErrors.password && <span>{formErrors.password}</span>}
                    /><br />
                {formErrors.password && <span style={{color:'red'}}> { formErrors.password } </span>}<br /><br />

                <Button variant="contained" color="primary" type='submit' style={{'marginRight' :'16px'}}>
                        Login
                </Button>

                 <Button variant="contained" color="secondary" onClick={() => {
                        resetForm()
                    }}>
                        Cancel
                </Button>
            </form>
        </Paper>
    </div>    
    )
}

export default Login
