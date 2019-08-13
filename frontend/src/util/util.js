import axios from 'axios'

export const isLoggedIn = () => axios.get('/api/users/isLoggedIn')
