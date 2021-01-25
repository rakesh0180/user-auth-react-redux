import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NavBar from '../components/NavBar'
import toggleStatus from '../actions/toggleStatus'

const App = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(toggleStatus())
        }
    }, [])

    return (
        <div>
            <h1>User Authentication</h1>
            <NavBar />
        </div>
    )
}

export default App
