import styles from '../styles/Home.module.css'
import Nav from './nav';
import Auth from './firebase/auth/login';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/router'
import CreateUser from './firebase/auth/create';
export default function HomePage() {
  const [user, setuser] = useState([]);
  const [a1, seta1] = useState(false);
  const [a2, seta2] = useState("");
  const [a3, seta3] = useState("");
  const r = useRouter();
  useEffect(() => {
    const UserData = async () => {
      const u = await Auth();
      setuser(u);
      console.log(u)
    };
    UserData();
  },[])
  return (
    <div>
      <Nav/>
      <div id='home' className={styles.bg}> 
        <div className={styles.aligndata}>
          <p className={styles.para}>
            Predict Yourself And Your Future Using Numerology
          </p>
          <p className={styles.para}>
            Numidica
          </p>
        </div>
      </div>
      <div id='login' className={styles.bg2}>
        <div id='as1' style={{"display":"flex"}} className={styles.authstack} >
          <p className={styles.hp}>Login</p>
          <label htmlFor='email-input'>Email</label>
          <input required type="email" id='email-input'/>
          <label htmlFor='email-password'>password</label>
          <input required type="password" id='email-password'/>
          <button type="submit" id='submit' onClick={() => {
            const email1 = document.getElementById("email-input").value;
            const password1 = document.getElementById("email-password").value;
            if(email1 == "" || password1 == ""){
              alert("fill all the values");
            }else{
              user.map(data => {
                if(data.email == email1 && data.password == password1){
                  sessionStorage.setItem("email",data.email);
                  sessionStorage.setItem("name",data.name);
                  r.reload();
                }
              })
            }
          }}>submit</button>
          <p className={styles.rp} onClick={() => {
            document.getElementById("as1").style.display = "none"
            document.getElementById("as2").style.display = "flex"
          }}>Create Account</p>
        </div>
        <div className={styles.authstack} id='as2' style={{"display":"none"}}>
          <p className={styles.hp}>Create Account</p>
          <label htmlFor='name-input1'>Name</label>
          <input required type="name" id='name-input1'/>
          <label htmlFor='email-input2'>Email</label>
          <input required type="email" id='email-input2'/>
          <label htmlFor='email-password2'>password</label>
          <input required type="password" id='email-password2'/>
          <label htmlFor='remail-password2'>Re-confirm Password</label>
          <input required type="password" id='remail-password2'/>
          <button type="submit" id='submit' onClick={() => {
            const em1 = document.getElementById("name-input1").value;
            const em2 = document.getElementById("email-input2").value;
            const em3 = document.getElementById("email-password2").value;
            const em4 = document.getElementById("remail-password2").value;
            if(em1 != "" || em2 != "" || em3 != "" || em4 != "" ){
              if(em3 == em4){
                user.map(ele => {
                  console.log(ele)
                  console.log(em2)
                  if(ele.email == em2){
                    console.log(a1)
                    seta1(true)
                    console.log(a1)
                  }
                })
                if(a1 == true){
                  alert("email exists")
                  r.reload()
                }else{
                  console.log(a1)
                  // fetch(`https://valid-email-api.herokuapp.com/`,{
                  //       body: JSON.stringify({
                  //         "email":em2,
                  //         "pid":"karna"
                  //       }),
                  //       headers: {
                  //         'Content-Type': 'application/json',
                  //       },
                  //       method: 'POST'
                  //     }

                  //   ).then(res => res.json()).then(data => {
                  //     if(data.valid == false){
                  //       alert("Invalid Email")
                  //     }else{
                  //       console.log(data.valid)
                  //       CreateUser(em1,em2,em3)
                  //       alert("account created")
                  //     }
                  //   })
                }
              }else{
                alert("password don't matched !")
              }
            }else{
              alert("fill all the values");
            }
          }}>submit</button>
          <p className={styles.rp} onClick={() => {
            document.getElementById("as2").style.display = "none"
            document.getElementById("as1").style.display = "flex"
          }}>login</p>
        </div>
      </div>
    </div>
  )
}
