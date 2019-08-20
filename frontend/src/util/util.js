import axios from 'axios'
import Auth from './Auth'

//USER
export const isLoggedIn = () => axios.get('/api/users/isLoggedIn')

export const login =async (userInfo) => {
  let res = await axios.post('/api/users/login',userInfo)

    //user id becomes local storage token
    Auth.authenticateUser(res.data.id);

    //checks if token matches login request on backend. Returns if user is authenticated, and userIdToken
    let  [isUserAuthenticated, userIdToken] = await checkAuthenticateStatus()

  return [res.data, isUserAuthenticated, userIdToken]
}

export const logout = async() => {
  let resp = await axios.post('api/users/logout')

  Auth.deauthenticateUser();

  return await checkAuthenticateStatus()

} ;

export const newUser = (userInfo) => axios.post('api/users/new',userInfo);

export const logoutUser = () => {
    logout().then(() => Auth.deauthenticateUser())
    .then(() => checkAuthenticateStatus());
};

export const checkAuthenticateStatus = async() => {
  let user = await isLoggedIn()

  if(user.data.id === +Auth.getToken()) {
    console.log('CHECKEDAUTH');
    return [Auth.isUserAuthenticated(), +Auth.getToken()]

  } else {
    if (user.data.id) {

      logoutUser();
      console.log('here1');
      return [false, null]
    } else {
      console.log('here2');
      Auth.deauthenticateUser();
      return [false, null]
    }
  }
};
