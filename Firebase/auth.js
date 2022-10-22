import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { db } from "./index";
import { getDoc, doc, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const signIn = async () => {
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider).catch((error) => {
    alert(error.message);
  });
  // Run On First Sign In
  try {
    const user = result.user;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return user;
    } else {
      await setDoc(docRef, {
        todoList: [],
      });
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  try{
    return user;
  } catch(e){
    return;
  }
};

const signOut = async () => {
  const auth = getAuth();
  await auth.signOut();
};

export { signIn, getAuth, signOut };
