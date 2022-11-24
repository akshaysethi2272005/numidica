import { deleteUser } from "firebase/auth";
import {getAuth, signIn} from"./auth";
export default function deleteUserAll(){ 
    const auth = getAuth()
    const user = auth.currentUser;

    deleteUser(user).then(() => {
        console.log("done")
    }).catch((error) => {
        alert("for deleting account , please relogin")
    });
}