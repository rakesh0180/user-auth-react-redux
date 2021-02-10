import axios from 'axios'

export default axios.create({
    baseURL: 'https://dct-user-auth.herokuapp.com'
})
