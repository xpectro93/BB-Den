import React, { useState, useEffect } from 'react';
import * as Util from '../../util/util';
import M from 'materialize-css';
import badger from '../../assets/bbb2.png'

const SignUp = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ pic, setPic ] = useState('');
  const [verPass , setVerPass ] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  //login, register with checkAuthenticateStatus as props
  const changeName = e => setUsername(e.target.value);
  const changePassword = e =>setPassword(e.target.value);
  const changeVerPass = e => setVerPass(e.target.value);

  const login = async () => {
      //returns [profile,isLoggedin, userTokenId]
      let res = await Util.login({username,password});
       props.login(res)
   }
   const logout = () => {
     //this returns w/e checkAuthenticateStatus returns
     
    Util.logout()
    props.logout([{},false,null])
   }
   const signUp = async e => {
     e.preventDefault()
     if(password === verPass){
      console.log('they match!')
     let resp = await Util.newUser({username:username.toLowerCase(), 
                    password_digest:password,
                    profile_pic:pic})
      props.login(resp)

     }else{
       console.log('they dont match') 
       setPassword('');
       setVerPass('');
     }
   }

   let intro = (
     <div className='container'>
       <ul class="collapsible">
    <li>
      <div class="collapsible-header z-depth-1"><img  src={badger} alt="banner"/><p>The Legend of the BlueBadger(Click to read)</p></div>
      <div class="collapsible-body">
      <span>
      Once upon a time there was a gorgeous girl, she loved to read, look at memes, make funny videos, and from time to time go through quora to see what kind of weird questions people asked. She was coolest brussel sprout in her hood, girls would envy her, she was not only pretty, but she was smart and a hoot to be around. 
      <br/>
      <br/>
      One day she was frolicking thought the forest.... hills. When she ran across a boy....lets call him Flapper Jackson. Flapper was a shy boy, afraid of live, could even barely speak or believe in himself, he was also always sad. She saw him sitting in the grass, looking all moppy and complaining about how his life sucked. She found it quite amusing, but she also felt bad for him so she decided to make him laugh at his own problems, was this unusual? Yes. Did it work? Absolutely! Within minutes of her roasting him, they were both laughing out loud. They spend the rest of that day talking... they got along very well and decided to hangout.
      <br/>
      Within a short period of time she made that fool feel the most loved he's ever felt by anymore. They both fell in love. She made him experience life, she taught many lessons on how to enjoy life. After many years he was finally, able to feel confident and was able to see a bring future for them both. They went on adventures together, they traveled to an abandoned city where the trains stop working at 11pm...spooky, huh? They almost died in that city. But through it all, he loved having that adventure with her. It was life changing for him. They both spent so much time together, they grew so close..
      <br/>
      But this boy was a fool, a big fool.

      </span>
      </div>
    </li>
  </ul>
     </div>
   )

   useEffect(()=> {
     M.updateTextFields();
     let elems = document.querySelectorAll('.collapsible');
     let instance = M.Collapsible.init(elems);
   },[])
   //New User Sign up
   if(isNewUser){
     return (
       <div className='container'>
            <div className='space'></div>
            <div className='space'></div>
            <div className='container'>
              {intro}
               <form onSubmit={signUp}>
                 <div className='input-field'>
                   <input  onChange={changeName} id="username" type="text" className="validate"/>
                   <label htmlFor="username">Username</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={setPic} id="profile-pic" type="text" className="validate"/>
                   <label htmlFor="profile-pic">Paste a link to a picture or gif</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changePassword} id="password" type="password" className="validate"/>
                   <label htmlFor="password">Password</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changeVerPass} id="verPass" type="password" className="validate"/>
                   <label htmlFor="verPass">Verify Password</label>
                 </div>
                 <button className={`col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3 ${password===verPass && password !== '' ?'pulse':''}`} type='submit'>Sign Up</button>
                 <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3"
                onClick={()=>{
                 setUsername('')
                 setPassword('')
                 setVerPass('')
                 setIsExistingUser(false);
                 setIsNewUser(false)}
                }>Go Back</button>
               </form>
            <div className='row'>
             
           </div>
           {props.isLoggedIn?
            <button className="waves-effect waves-light btn round indigo lighten-3" onClick={logout}>Log Me outie</button>:"Youre logged out"}
          </div>

     </div>)


   //Existing User Sign up
   }else if(isExistingUser){
     return (

       <div className='container'>
            <div className='space'></div>
            <div className='space'></div>
            <div className='container'>
            {intro}
               <form>
                 <div className='input-field'>
                   <input  onChange={changeName} id="username" type="text" className="validate"/>
                   <label htmlFor="username">Username</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changePassword} id="password" type="password" className="validate"/>
                   <label htmlFor="password">Password</label>
                 </div>
               </form>
            <div className='row'>
             <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={login}type='submit'>Submit</button>
             <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3"
                onClick={()=>{
                 setIsExistingUser(false);
                 setIsNewUser(false);}
                }>Go Back</button>
           </div>
           {props.isLoggedIn?
            <button className="waves-effect waves-light btn round indigo lighten-3" onClick={logout}>Log Me outie</button>:"Youre logged out"}
          </div>

     </div>)

   //Intro
   }else{
     return(

       <div className='center-align container'>
         <div className='space'></div>

         <div className='row'>
         {intro}
         <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsNewUser(true)}>Sign Up</button>
         <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsExistingUser(true)}>Log In</button>
         </div>
       </div>
     )
   }


}
export default SignUp
