import HomePage from "../components/homepage";
import MainPage from "../components/mainpage";
import { useEffect, useState } from "react";
import { getAuth } from "../Firebase/auth";
import Head from "next/head";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = () => {
    const auth = getAuth();
    if (auth == null) {
      setUser(null);
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    }
  };

  if (!user) {
    return (
    <div>
      <Head>
        <title>Numidica</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/logo.png"/>
      </Head>
      <HomePage />
    </div>
    );
  } else {
    return (
    <div>
      <Head>
        <title>Numidica</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/logo.png"/>
      </Head>
      <MainPage />
    </div>
    );
  }
}
