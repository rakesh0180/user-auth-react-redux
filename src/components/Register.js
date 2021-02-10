import React, { useState } from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import { Button, TextField } from '@material-ui/core'
import { startRegisterUser} from '../actions/userAuth'
import swal from 'sweetalert'

const Register = (props) => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const attr = e.target.name

        if(attr === 'username') {
            setUserName(e.target.value)
        } else if(attr === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const resetForm = () => {
        setUserName('')
        setEmail('')
        setPassword('')
    }

    const runValidations = () => {
        //name
        if(userName.trim().length === 0) {
            errors.userName = 'name cannot be blank'
        } else if(userName.trim().length < 5) {
            errors.userName = 'name should have more than 5 characters'
        }

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
                username: userName,
                email: email,
                password: password
            }

            const handleRedirect = () => {
                console.log('handle redirect')
                props.history.push('/login')
                swal('cool')
            }
    
            dispatch(startRegisterUser(formData, handleRedirect))
            
            resetForm()

        } else {
            console.log('form errors', errors)
            setFormErrors(errors)
        }


    }

    return (
        <div className='formDiv'>
            <Paper elevation={3}>
                <h1>Register With Us</h1>
                <form onSubmit={handleSubmit}>

                        <TextField 
                            variant='outlined' 
                            label='Username' 
                            value={userName} 
                            onChange={handleInputChange} 
                            name='username'
                            error={formErrors.userName && <span>{formErrors.userName}</span>}
                        /><br />
                        {formErrors.userName && <span style={{color:'red'}}> { formErrors.userName } </span>}<br />

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
                            type='password'
                            variant='outlined' 
                            label='Password' 
                            value={password} 
                            onChange={handleInputChange} 
                            error={formErrors.password && <span>{formErrors.password}</span>}
                        /><br />
                        {formErrors.password && <span style={{color:'red'}}> { formErrors.password } </span>}<br />

                        <Button variant="contained" color="primary" type='submit' style={{'marginRight' :'16px'}}>
                            Register
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

export default Register
