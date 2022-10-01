import styles from "../styles/Home.module.css";
import Nav from "./nav";
import { signIn } from "../Firebase/auth";

export default function HomePage() {
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
      <div id="login" className={styles.bg2}>
        <button
          type="button"
          onClick={signIn}
          className="hover:shadow-md rounded-lg hover:shadow-blue-500/50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          <svg viewBox="0 0 488 512" width="1rem">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg>
          <span className="px-2">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
