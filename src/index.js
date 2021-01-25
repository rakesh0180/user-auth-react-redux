import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import startGetNotes from './actions/startGetNotes'


const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

if(localStorage.getItem('token')) {
    store.dispatch(startGetNotes())
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'))