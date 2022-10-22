import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./index";
const readUser = async (user) => {
    try {const fdb = getFirestore(app);
    const querysnap = await getDoc(doc(fdb,"users",user));
    if(querysnap.exists()){
        const yui = querysnap.data().todoList
        const data = [];
        yui.map(ele => {
            var kjp = {id:ele.id , name:ele.name , dob:ele.dob}
            data.push(kjp);
        })
        return data
    }}catch(e){
        console.log(e);
    }

}
export default readUser;