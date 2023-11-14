import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdIgB3ZgWklKmBLOWCn9SzZ0j7H7uMFIY",
    authDomain: "myecommerce-agustinbarrera.firebaseapp.com",
    projectId: "myecommerce-agustinbarrera",
    storageBucket: "myecommerce-agustinbarrera.appspot.com",
    messagingSenderId: "89224795886",
    appId: "1:89224795886:web:d2217953c6daa4049bc5ff"
    };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);