// import firebase from "firebase/compat/app";
// import "firebase/database"
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

//firebase.initializeApp(firebaseConfig)
const databaseRef = db.ref()
const speechTextRef = databaseRef.child("speechText")

export { speechTextRef }
//export default firebase
