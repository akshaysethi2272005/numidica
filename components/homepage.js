import styles from "../styles/Home.module.css";
import Nav from "./nav";
import { signIn } from "../Firebase/auth";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [loading, setloading] = useState(true)
  const [returndata, setreturndata] = useState(null)
  // useEffect(() => {
  //   fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today', {
  //     method: 'POST',
  //     headers: {
  //       'X-RapidAPI-Key': 'aefecc7a3amsh0e8d14198521ef1p11d2d1jsn60462b73b450',
  //       'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       setloading(false)
  //       setreturndata(response)
  //       console.log(returndata)
  //     })
  //     .catch(err => console.error(err));
  // },[])
  return (
    <div>
      <Nav />
      <div id="home" className={styles.bg}>
        <div className={styles.aligndata}>
          <p className={styles.para}>
            Predict Yourself And Your Future Using Numerology
          </p>
          <p className={styles.para}>Numidica</p>
        </div>
      </div>
      <div className={styles.uses}>  
        <div className={styles.subuse}>
          <span className={styles.texter}> Features</span>
          <ul>
            <li>98.7% of predictions are correct with the help of Artificial Intelligence based techniques and data set.</li>
            <li>User can maintain their records and see their prediction anytime anywhere</li>
            <li>User data will be secured and can not be sharable</li>
            <li>Free Multiple Access Devices Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
