// import firebase from "firebase/compat/app";
// import "firebase/database"
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBR-RLfB2gK_ld5vqqhBCN01CmcZeKmytM",
    authDomain: "speech-text-f091c.firebaseapp.com",
    databaseURL: "https://speech-text-f091c-default-rtdb.firebaseio.com",
    projectId: "speech-text-f091c",
    storageBucket: "speech-text-f091c.appspot.com",
    messagingSenderId: "803030523855",
    appId: "1:803030523855:web:598b7908265659f8f47cba"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

//firebase.initializeApp(firebaseConfig)
const databaseRef = db.ref()
const speechTextRef = databaseRef.child("speechText")

export { speechTextRef }
//export default firebase
