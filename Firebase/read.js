import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./index";
const readUser = async (userID) => {
  try {
    const fdb = getFirestore(app);
    const querysnap = await getDoc(doc(fdb, "users", userID));
    if (querysnap.exists()) {
      const conditionalData_SignUp = querysnap.data();
      const yui = conditionalData_SignUp ? conditionalData_SignUp.todoList : [];
      const data = [];
      yui.map((ele) => {
        var kjp = { id: ele.id, name: ele.name, dob: ele.dob ,gender : ele.gender};
        data.push(kjp);
      });
      return data;
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
};
export default readUser;
