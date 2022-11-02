import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4NcFkx9_bX2JO9LvgYDJpZcfija3DshI",
  authDomain: "mediatecnica-10847.firebaseapp.com",
  projectId: "mediatecnica-10847",
  storageBucket: "mediatecnica-10847.appspot.com",
  messagingSenderId: "12744885947",
  appId: "1:12744885947:web:ca164d28451f1228e68b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and getDocs, a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Gaurdar Colección
export const saveTask = (title, description, image) =>
  addDoc(collection(db, "tasks"), { title, description, image });


export const getTasks = () => getDocs(collection(db, 'tasks'))

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);
