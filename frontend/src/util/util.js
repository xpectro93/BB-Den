import axios from 'axios'
import Auth from './Auth'

//USER
export const isLoggedIn = () => axios.get('/api/users/isLoggedIn')

export const login =async(userInfo) => {
  let res =await axios.post('/api/users/login',userInfo)

    //user id becomes local storage token
    Auth.authenticateUser(res.data.id);

    //checks if token matches login request on backend. Returns if user is authenticated, and userIdToken
    let  [isUserAuthenticated, userIdToken] = await checkAuthenticateStatus()

  return [res.data, isUserAuthenticated, userIdToken]
}


export const logout = () => axios.post('api/users/logout')
export const newUser = (userInfo) => axios.post('api/users/new',userInfo)

export const logoutUser = () => {
    logout().then(() => Auth.deauthenticateUser())
    .then(() => checkAuthenticateStatus());
};

export const checkAuthenticateStatus = async() => {
  let returnArr = []
  let user = await isLoggedIn()

  if(user.data.id === +Auth.getToken()) {
      returnArr.push(Auth.isUserAuthenticated())
      returnArr.push(+Auth.getToken())
      return returnArr
  } else {
    if (user.data.id) {
      logoutUser();
    } else {
      Auth.deauthenticateUser();
    }
  }
};
