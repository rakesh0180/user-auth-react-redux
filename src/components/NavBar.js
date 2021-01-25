import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import toggleStatus from '../actions/toggleStatus'
import MyNotes from './MyNotes'
import swal from 'sweetalert'
import '../App.css'

const NavBar = (props) => {

    const userLoggedIn = useSelector(state => state.userLoggedIn)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='links'>
                <Link to='/'>Home</Link> || 
                {userLoggedIn ? (
                    <>
                        <Link to='/account'>Account</Link> ||
                        <Link to='/mynotes'>MyNotes</Link> ||
                        <Link to='/' onClick={() => {
                            localStorage.removeItem('token')
                            dispatch(toggleStatus())
                            props.history.push('/')
                            swal("Cool!", "You have logged out successfully!", "success")
                        }}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to='/register'>Register</Link> ||
                        <Link to='/login'>Login</Link>
                    </>
                )}

            </div>

            <Route path='/' component={Home} exact={true} />
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props) => {
                return <Login 
                            {...props}
                        />
            }}/>
            <Route path='/account' component={Account}/>
            <Route path='/mynotes' component={MyNotes} />
        </div>
    )
}

// const WrappedComponent = withRouter(NavBar)
// export default WrappedComponent

export default withRouter(NavBar)
