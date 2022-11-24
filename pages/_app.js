import { initializeFirebase } from "../Firebase/index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  initializeFirebase();
  return <Component {...pageProps} />;
}

export default MyApp;
