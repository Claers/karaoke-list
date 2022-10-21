import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);
export const db = getFirestore(firebase_app);
export const auth = getAuth(firebase_app);

export async function getMusics(db) {
  const musicsCol = collection(db, "musics");
  const musicSnapshot = await getDocs(musicsCol);
  const musicList = musicSnapshot.docs.map((doc) => {
    const music = doc.data();
    return {
      ...music,
      "id": doc.id
    }
  });
  return musicList;
}

export async function addMusic(musicData) {
  const musicsCol = collection(db, "musics");
  const music = await addDoc(musicsCol, musicData);
  console.log("Musique" + music.name + "créé avec l'id :" + music.id)

}

export async function logInWithEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export async function logout() {
  signOut(auth);
};
