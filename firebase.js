// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2exEstnMQP4lo4gJEYaSoMR_r2DN8u8c",
  authDomain: "ksl-app-d7a68.firebaseapp.com",
  projectId: "ksl-app-d7a68",
  storageBucket: "ksl-app-d7a68.appspot.com",
  messagingSenderId: "1091261069415",
  appId: "1:1091261069415:web:2e4f2147254c9f2d5d3cc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function LoginHeadBranch(email, password) {
  try {
    const auth = getAuth();
    const resp = await signInWithEmailAndPassword(auth, email, password);
    if (resp !== null) {
      console.log(resp.user);
    }
  } catch (error) {
    console.log(error);
  }
}
