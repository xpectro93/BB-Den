import axios from 'axios'

//USER
export const isLoggedIn = () => axios.get('/api/users/isLoggedIn')
export const login = (userInfo) => axios.post('/api/users/login',userInfo)
export const logout = () => axios.post('api/users/logout')
export const newUser = (userInfo) => axios.post('api/users/new',userInfo)
