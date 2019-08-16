import axios from 'axios'
import Auth from './Auth'

//USER
export const isLoggedIn = () => axios.get('/api/users/isLoggedIn')

export const login = (userInfo) => {
  let newObj = {
    username:userInfo.username,
    password_digest:userInfo.password
  }
  console.log('this is newObj', newObj)
  axios.post('/api/users/login',newObj)
  // .then(res => {
  //   Auth.authenticateUser(res.data.id);
  // })
  // .then(() => {
  //   // checkAuthenticateStatus();
  // })
}


export const logout = () => axios.post('api/users/logout')
export const newUser = (userInfo) => axios.post('api/users/new',userInfo)

export const logoutUser = () => {
    logout().then(() => Auth.deauthenticateUser())
    .then(() => checkAuthenticateStatus());
};
export const checkAuthenticateStatus = (setIsLoggedIn,setUserId) => {
  isLoggedIn().then(user => {
    if (user.data.id === Auth.getToken()) {
        setIsLoggedIn(Auth.isUserAuthenticated())
        setUserId(Auth.getToken())
    } else {
      if (user.data.id) {
        logoutUser();
      } else {
        Auth.deauthenticateUser();
      }
    }
  });
};
