import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./index";
const updateUserData = (user,lop) => {
  if (!user.uid) {
    return;
  }
  const id = Math.random().toString(16).slice(2)
  const db = getFirestore(app);
  const docRef = doc(db, "users", user.uid);
  const data = {
    todoList: lop,
  };

  setDoc(docRef, data)
    .then((docRef) => {
      return;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updateUserData;
