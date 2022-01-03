import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  setDoc,
  updateDoc,
  doc,
  collection,
  onSnapshot,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2exEstnMQP4lo4gJEYaSoMR_r2DN8u8c",
  authDomain: "ksl-app-d7a68.firebaseapp.com",
  projectId: "ksl-app-d7a68",
  storageBucket: "ksl-app-d7a68.appspot.com",
  messagingSenderId: "1091261069415",
  appId: "1:1091261069415:web:2e4f2147254c9f2d5d3cc2",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const _DB = getFirestore();
export default _DB;
let currUser;

export async function BranchManagerAccount(
  email,
  pass,
  manager_name,
  branch_name
) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, pass);
    if (userCred) {
      currUser = auth.currentUser;
    }
    await setDoc(doc(_DB, "branch_managers", currUser.uid), {
      branch_name: branch_name,
      manager_name: manager_name,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function LoginHeadBranch(email, password) {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    if (resp !== null) {
      console.log(resp.user);
    }
  } catch (error) {
    console.log(error);
  }
}

export function LogOut() {
  try {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.log(error);
  }
}

export function FetchAll(setData) {
  try {
    const docRef = collection(_DB, "registered_users");
    onSnapshot(docRef, (snapshot) => {
      setData(() => [...snapshot.docs]);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function AcceptReq(key) {
  const docRef = doc(_DB, "registered_users", key);
  await updateDoc(docRef, {
    accepted: true,
  });
  console.log(key);
}

export async function RejectReq(key) {
  const docRef = doc(_DB, "registered_users", key);
  await updateDoc(docRef, {
    rejected: true,
  });
}
