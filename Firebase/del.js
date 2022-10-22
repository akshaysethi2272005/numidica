import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./index";
const delUserData = (user,lop) => {
  if (!user.uid) {
    return;
  }
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

export default delUserData;
