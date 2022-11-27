import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./index";
const readSetting = async () => {
  try {
    const fdb = getFirestore(app);
    const querysnap = await getDoc(doc(fdb, "settings", "NcjOaYiuQ0ox8Ewjoi7S"));
    if (querysnap.exists()) {
      const conditionalData_SignUp = querysnap.data();
      return conditionalData_SignUp;
    } else {
      return {maintainance_mode: 'on'};
    }
  } catch (e) {
    return {maintainance_mode: 'on'};
  }
};
export default readSetting;