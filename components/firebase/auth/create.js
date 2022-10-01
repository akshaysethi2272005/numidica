import {getFirestore,  addDoc , collection, setDoc, doc} from "firebase/firestore"; 
import app from "../firebase";
const CreateUser =  async(n , e , p) => {
    const db2 = getFirestore(app)
    try {
        const docRef = await setDoc(doc(db2, "login",e), {
          name: n,
          email: e,
          password: p
        });
      } catch (e) {
        alert("document exists")
      }
}
export default CreateUser