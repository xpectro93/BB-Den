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
  const [err, setErr ] = useState('')
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
     let resp = await Util.newUser({username:username.toLowerCase(), 
                    password_digest:password,
                    profile_pic:pic})
      props.login(resp)

     }else{
       setErr('Passwords dont match, try again') 
       setPassword('');
       setVerPass('');
     }
   }
   let intro = (
     <div className='container'>
       <ul className="collapsible">
      <li>
      <div className="collapsible-header z-depth-1"><img  className='alil' src={badger} alt="banner"/><p>The legend of the Bluebadger and the fool(Click to read) For<b> Ilana </b></p></div>
      <div className="collapsible-body">
      <span>
      Once upon a time there was a gorgeous girl, she loved to read, look at memes, make funny videos, and from time to time go through quora to see what kind of weird questions people asked, she also liked to troll people there, she was a bit of a rascal. She was coolest brussel sprout in her hood, girls would envy her, she was not only pretty, but she was smart and a hoot to be around. 
      <br/>
      <br/>
      One day she was frolicking throught the forest.... hills. When she ran across a boy....lets call him Flapper Jackson. Flapper was a shy boy, afraid of life, could barely speak or believe in himself, he was also always <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=pgN-vvVVxMA'>Sad!</a>. She saw him sitting in the grass, looking all moppy and complaining about how his life sucked. She found it quite amusing, but she also felt bad for him so she decided to make him laugh at his own problems, was this unusual? Yes. Did it work? Absolutely! Within minutes of her roasting him, they were both laughing out loud. They spend the rest of that day talking... they got along very well and decided to start hanging out.
      <br/>
      Within a short period of time she made that fool feel the most loved he's ever felt by anymore. She was a bit hesitant on getting too close to Flapper, but she agreed to be with him on one condition. She told him to forget about his ghosts and just be happy with her. He happily agreed. They both fell in love. She made him experience new feelings, she taught many lessons on how to enjoy life. After many years he was finally able to feel confident and was able to see a bright future for them both. They went on adventures together, they traveled to an abandoned city where the trains stop working at 11pm...spooky, huh? They almost died in that city. But through it all, he loved having that adventure with her. It was life changing for him. They both spent so much time together, they grew so close..
      <br/>
      But this boy was a fool, a big fool. He was haunted by his past. It would of been so easy if he just ignored his past and just lived happily with his beloved. But Bluebadger's world was about to go topsy-turvy after what he was about to do.
      <br/> 
      One normal day, a ghost from his past called to him, he was waiting for a long time to say goodbye to this ghost. He knew he should just move on, but he was such a big dopey fool that he didn't listen to his senses. He answered back to the ghost, he wanted to say goodbye to it, and he did. He was so relieved to have this weight off his shoulders. He now just wanted to be honest with Bluebadger and put his past behind him. But boi he was such a fool. He was blind and stupid. He told Bluebadger about what he had done. Poor girl, he saw her heart break in her expression. He realized he messed up, but it was far too late. He broke the heart of the most wonderful girl he had ever known. Of the girl that pulled him out of his rotten state, the girl who pushed him to better himself and succeed. 
      <br/>
      Poor Bluebadger told that nigga to fuck off and ran, she ran as fast as she could. He chased her and tried to apologize, but the damage was already done. How can one careless mistake make such a wonderful girl hurt, he asked himself. He felt so bad, as soon as she was gone, he quickly fell back in <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=pgN-vvVVxMA'>Sad!</a> boi state, depressed and lonely, and with a broken heart.  Now he sit a dark room in front of a computer screen listening to
      <a target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/watch?v=-jRKsiAOAA8'> Falling Down</a> while he thinks about many things such as how he hurt the coolest brussel sprout in Antarctica, how they will never enjoy the pickles they made together, how he will never experience a hug from her and enjoy her gentle soft warm lips. 
      <br/>
      This boi is full of regrets. You might say why doesn't he look for her? Well this boi is afraid of knowing that once he does this and she shoos him away, that will be the definite end of all he loved for the past year. Well, what words would he say to her if he had the chance.....?
      <h3>Я люблю тебя</h3>
      <br/>

      "I haven't stopped thinking about you for the past two months. I am very sorry for hurting you, I regret what I did. I wish to be with you more than anything. You might not care about me anymore, but I think of you constantly, every morning I wake up with a pain in my chest, everyday It gets worse. I finally have dreams, they're all about you. The only thing that's kept me going over the last two months is hoping that I would get to talk to you. I need you in my life, you make me feel so happy. Let me learn from my mistakes. I promise to be a better person. I want to be with you more than anything. But even if you don't want to see me anymore, please take this website. It took me two and a half months to build. It was supposed to be your birthday gift but I had to learn so much to create it. I wanted to finish it before giving it to you but I can't wait. I miss you too much. I build it with all my love. I will still continue to work on it.
      <br/> I am so sorry, I am not worthy of you, but please talk to me, I miss you, let me learn from my mistakes. I got a job and just want to finally spend time with you chilling and eating in all those places we dreamed of eating at... 🍱 Find it in your heart to forgive me. I will wait for you. I love you so much 💙
      <br/>
      I don't know just thought I mention this song gave me the extra motivation to see you. just thought I'd mention it."
      <h3><a href='https://www.youtube.com/watch?v=Gru4IfbKlfU' target='_blank'rel="noopener noreferrer">Song Link
      </a></h3>
      <br/> 
      What about Bluebadger, what happened to her you might ask? No one knows for certain, but knowing her, she keeps herself entertained. She's a tough gal, that's one of the many reasons that fool fell in love with her.
      I hope she forgives him, but it would be understandable if she doesn't.. Not all stories have a happy ending. Does this one have one? No one knows. 
    
      </span>
      </div>
    </li>
    <li>
    <div className="collapsible-header z-depth-1"><p>What does Bluebadge have to offer? (Click to find out)</p></div>
    <div className="collapsible-body">
      <span>
        <ul>
          <li>MEMES!</li>
          <li>Insane Quora questions</li>
          <li>Cringy TikTok Videos</li>
          <li>Many more topics to browse, all updated frequently!</li>
          <li>A user profile you can share to show your friends your favorite memes</li>
          <li> UNDER CONSTRUCTION
            <ul>
              <li>YouTube Videos: Browse and save them to your favorites</li>
              <li>Book tracker : Keep track, add to wishlist, and rate books</li>
              <li>TODO : have a todo list to keep track of all the things you need to do</li>
            </ul>
          </li>
          <li><h1>SIGN UP ALREADY! </h1></li>
          <li><h1>Join the Bluebadger Army </h1></li>
          
        </ul>
      </span>
      </div>
    </li>
  </ul>
     </div>
   )
    
   useEffect(()=> {
     M.updateTextFields();
     let elems = document.querySelectorAll('.collapsible');
     
     // eslint-disable-next-line no-unused-vars
     let instance = M.Collapsible.init(elems);
   },[props.isLoggedIn])
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
                   <input  onChange={(e)=>setPic(e.target.value)} id="profile-pic" type="text" className="validate"/>
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
                <h3>{err}</h3>
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
             <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={login}type='submit'>Login</button>
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
         <div className="col s12 offset-m4 m4 offset-l4 l4">
           <h3>With much love,</h3>
           <br/>
           <h3>For Ilana</h3>
         </div>
         </div>
       </div>
     )
   }


}
export default SignUp
