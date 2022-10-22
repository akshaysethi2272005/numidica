import HomePage from "../components/homepage";
import MainPage from "../components/mainpage";
import { useEffect, useState } from "react";
import { getAuth } from "../Firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const routernet = useRouter();
  const {
    query:{nki1,nki2,nki3},
  } = routernet;
  const datareq = {nki1,nki2,nki3};
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
    return (
      <div>Hello 
      {
        datareq.nki2
      }
      </div>
    );
  }
}
