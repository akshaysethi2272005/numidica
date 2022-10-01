import { initializeFirebase } from "../Firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  initializeFirebase();
  return <Component {...pageProps} />;
}

export default MyApp;
