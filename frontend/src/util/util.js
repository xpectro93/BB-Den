import axios from 'axios'

//USER
export const isLoggedIn = () => axios.get('/api/users/isLoggedIn')
export const login = (userInfo) => axios.post('/api/login',userInfo)
