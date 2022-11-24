import { useEffect, useState } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
import { signOut, getAuth ,signIn} from "../Firebase/auth";
import updateUserData from "../Firebase/firestore";

const Nav = () => {
  const [nav, setnav] = useState(false);
  const [user, setUser] = useState(null);
  const [newl, setnewl] = useState(false)
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

  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <nav className={style.navbar}>
      <ul className={style.lt1}>
        {!user && (<li>Numidica</li>)}
        {user && (<li className={style.headio} >Numidica</li>)}
        {!user && (<li>
          <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            onClick={() => setnav((c) => !c)}
          >
            <rect width="100" fill="white" height="10"></rect>
            <rect y="30" width="100" fill="white" height="10"></rect>
            <rect y="60" width="100" fill="white" height="10"></rect>
          </svg>
        </li>)}
        {user && (<li>
          <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            onClick={() => setnav((c) => !c)}
          >
            <rect width="100" fill="#1b1b1b" height="10"></rect>
            <rect y="30" width="100" fill="#1b1b1b" height="10"></rect>
            <rect y="60" width="100" fill="#1b1b1b " height="10"></rect>
          </svg>
        </li>)}
      </ul>
      <ul className={nav ? style.active : style.lt2} id="slide">
        {!user && (<li>
          <Link href="/#home" scroll={true}>
            <span>Home</span>
          </Link>
        </li>)}
        {!user && (
          <li>
            <span onClick={signIn} href="/#login">Login / Create</span>
          </li>
        )}
        {user && (
          <li>
            <Link href="/" scroll={true}>
              <button
                type="button"
                className={style.btns1}
              >Home
              </button>
            </Link>
          </li>
        )}
        {user && (
          <li>
            <button
              onClick={signOut}
              type="button"
              className={style.btns1}
            >Logout
            </button>
          </li>
        )}
        {user && (
          <li>
            <Link href="/settings" scroll={true}>
              <button
                type="button"
                className={style.btns1}
              >Settings
              </button>
            </Link>
          </li>
        )}
        {/* Test Remove */}
        {/* {user && (
          <li>
            <button
              onClick={() => setnewl((c) =>)}
              type="button"
              className={style.btns1}
            >
              New
            </button>
          </li>
        )}
        {user && (
          <li>
            <button
              onClick={() => updateUserData(user)}
              type="button"
              className={style.btns1}
            >
              Delete
            </button>
          </li>
        )} */}
      </ul>
    </nav>
  );
};

export default Nav;
