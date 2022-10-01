import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./index";

const updateUserData = (user) => {
  if (!user.uid) {
    return;
  }

  const db = getFirestore(app);
  const docRef = doc(db, "users", user.uid);
  const data = {
    todoList: [
      {
        title: "Complete App",
        description: "Complete PDF Actions Feature Pipline",
        createdOn: new Date().toISOString(),
      },
      {
        title: "Publish App",
        description: "Publish PDF Actions PWA",
        createdOn: new Date().toISOString(),
      },
    ],
  };

  setDoc(docRef, data, { merge: true })
    .then((docRef) => {
      alert("Document has been updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updateUserData;
