import { useEffect, useState } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
import { signOut, getAuth } from "../Firebase/auth";
import updateUserData from "../Firebase/firestore";

const Nav = () => {
  const [nav, setnav] = useState(false);
  const [user, setUser] = useState(null);

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
        <li>Numidica</li>
        <li>
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
        </li>
      </ul>
      <ul className={nav ? style.active : style.lt2} id="slide">
        <li>
          <Link href="/#home" scroll={true}>
            <a>Home</a>
          </Link>
        </li>
        {!user && (
          <li>
            <a href="/#login">Login / Create</a>
          </li>
        )}
        {user && (
          <li>
            <button
              onClick={signOut}
              type="button"
              className="hover:shadow-md hover:shadow-red-500/50 w-32 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <svg viewBox="0 0 150 130" height="20">
                <g>
                  <path d="M79.128,64.598H40.069c-1.726,0-3.125-1.414-3.125-3.157c0-1.744,1.399-3.158,3.125-3.158h39.057L66.422,43.733 c-1.14-1.301-1.019-3.289,0.269-4.439c1.288-1.151,3.257-1.03,4.396,0.271l17.281,19.792c1.061,1.211,1.029,3.019-0.02,4.19 l-17.262,19.77c-1.14,1.302-3.108,1.423-4.396,0.271c-1.287-1.151-1.408-3.139-0.269-4.44L79.128,64.598L79.128,64.598z M42.396,116.674c1.689,0.409,2.727,2.11,2.318,3.799c-0.409,1.689-2.109,2.728-3.799,2.318c-3.801-0.922-7.582-1.671-11.052-2.358 C10.426,116.583,0,114.519,0,86.871V34.188C0,7.96,11.08,5.889,29.431,2.46c3.572-0.667,7.448-1.391,11.484-2.371 c1.689-0.409,3.39,0.629,3.799,2.319c0.408,1.689-0.629,3.39-2.318,3.799c-4.291,1.041-8.201,1.771-11.805,2.445 C15.454,11.48,6.315,13.188,6.315,34.188v52.683c0,22.467,8.643,24.179,24.756,27.37C34.453,114.911,38.138,115.642,42.396,116.674 L42.396,116.674z" />
                </g>
              </svg>
              Sign Out
            </button>
          </li>
        )}
        {/* Test Remove */}
        {user && (
          <li>
            <button
              onClick={() => updateUserData(user)}
              type="button"
              className="hover:shadow-md hover:shadow-red-500/50 w-32 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <svg viewBox="0 0 150 130" height="20">
                <g>
                  <path d="M79.128,64.598H40.069c-1.726,0-3.125-1.414-3.125-3.157c0-1.744,1.399-3.158,3.125-3.158h39.057L66.422,43.733 c-1.14-1.301-1.019-3.289,0.269-4.439c1.288-1.151,3.257-1.03,4.396,0.271l17.281,19.792c1.061,1.211,1.029,3.019-0.02,4.19 l-17.262,19.77c-1.14,1.302-3.108,1.423-4.396,0.271c-1.287-1.151-1.408-3.139-0.269-4.44L79.128,64.598L79.128,64.598z M42.396,116.674c1.689,0.409,2.727,2.11,2.318,3.799c-0.409,1.689-2.109,2.728-3.799,2.318c-3.801-0.922-7.582-1.671-11.052-2.358 C10.426,116.583,0,114.519,0,86.871V34.188C0,7.96,11.08,5.889,29.431,2.46c3.572-0.667,7.448-1.391,11.484-2.371 c1.689-0.409,3.39,0.629,3.799,2.319c0.408,1.689-0.629,3.39-2.318,3.799c-4.291,1.041-8.201,1.771-11.805,2.445 C15.454,11.48,6.315,13.188,6.315,34.188v52.683c0,22.467,8.643,24.179,24.756,27.37C34.453,114.911,38.138,115.642,42.396,116.674 L42.396,116.674z" />
                </g>
              </svg>
              Update Data
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
