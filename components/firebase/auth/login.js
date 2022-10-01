import {getFirestore,  collection, getDocs } from "firebase/firestore"; 
import app from "../firebase";
const Auth = async () => {
    const db = getFirestore(app)
    const auth = await getDocs(collection(db,"login"));
    const users = [];
    auth.forEach((doc) => {
        users.push(doc.data());
    })
    if(users === []){
        return {user: null};
    }else{
        return users;
    }

}
export default Auth;