import {
  initializeApp
} from "firebase/app";
import {
  collection,
  getFirestore,
  query,
  orderBy
} from "firebase/firestore";
import {
  getAuth
} from "firebase/auth";
import {
  getStorage
} from "firebase/storage";

const firebaseConfig = {
  //your firebase config sdk file here!
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

const storage = getStorage();

const db = getFirestore();

const colRef = collection(db, 'users');

const blogsRef = collection(db, 'blogs');

const newBlogsRef = query(blogsRef, orderBy("blogTime", "desc"));

export {
  auth,
  storage,
  db,
  colRef,
  blogsRef,
  newBlogsRef
}