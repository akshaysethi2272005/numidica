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
    </div>
  );
}
