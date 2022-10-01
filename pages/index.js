import HomePage from "../components/homepage";
import MainPage from "../components/mainpage";
import { useEffect, useState } from "react";
import { getAuth } from "../Firebase/auth";

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
    return <HomePage />;
  } else {
    return <MainPage />;
  }
}
