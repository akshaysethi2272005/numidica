import HomePage from "../components/homepage";
import { useEffect, useState } from "react";
import { getAuth } from "../Firebase/auth";
import Head from "next/head";
import Nav from '../components/nav'
import jis from "../styles/Id.module.css";
import stylessss from "../styles/Nav.module.css";
import deleteUserAll from "../Firebase/deleteacc";


export default function Home() {
  const [z, setz] = useState(null);
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    initializeAuth();
  }, []);
  const initializeAuth = () => {
    const auth = getAuth();
    if (auth == null) {
      setz(null);
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setz(user);
        } else {
          setz(null);
        }
      });
    }
  };

  if (!z) {
    return <HomePage />;
  } else {
    return (
        <div>

      <Head>
        <title>Numidica</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/logo.png"/>
      </Head>
        <Nav/>
        <div className={stylessss.navtype}>
            <div className={jis.sett}></div>
        </div>
        <div className={jis.userpropdata}>
            <p className={jis.userpo}>Settings </p>
        </div>
        <div className={jis.userpropdata}>
            <p className={jis.userpo}>Name : </p>
            <p className={jis.userprop}>{z.displayName}</p>
        </div>
        <div className={jis.userpropdata}>
            <p className={jis.userpo}>Email</p>
            <p className={jis.userprop}>{z.email}</p>
        </div>
        <div className={jis.userpropdata}>
            <p className={jis.userpo}>Email Verified</p>
            <p className={jis.userprop}>{z.emailVerifies !== false && "yes"}</p>
        </div>
        <div className={jis.userpropdata}>
            <p className={jis.userpo}>Last Login</p>
            <p className={jis.userprop}>{z.metadata.lastSignInTime}</p>
        </div>
        <div className={jis.userpropdata}>
            <button className={jis.bhtn}
            onClick={deleteUserAll}>Delete Account</button>
        </div>
    </div>
    )
  }
}