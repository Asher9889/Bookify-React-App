import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore"
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage"
// import { getDocs } from "firebase/firestore/lite";

export const FirebaseContext = createContext();


const firebaseConfig = {
  apiKey: "AIzaSyBVhbkaEZinip4g_p53Q9s3FedVXRYKaIo",
  authDomain: "bookify-167b4.firebaseapp.com",
  projectId: "bookify-167b4",
  storageBucket: "bookify-167b4.appspot.com",
  messagingSenderId: "169670213142",
  appId: "1:169670213142:web:911dbb3fede0f95ae17f37",
};


export const useFirebase = () => useContext(FirebaseContext);


const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore(firebaseApp, ) 
const storage = getStorage(firebaseApp, "gs://bookify-167b4.appspot.com")
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();







export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        setName(user.displayName);
      } else {
        setUser(false);
      }
    });
  }, []);

  const signUpUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const googleSignIn = () =>
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log("Error Caught during google auth", err));

  const isLoggedIn = user ? true : false;

  const userDetails = () => {
    onAuthStateChanged(auth, (user) => user);
    // for git
  };

  

  const userSignOut = () => signOut(auth).then((res) => console.log("LogOut Success"));

  const currentUser = auth.currentUser;
  // console.log(currentUser)

  const addDataInFirestore = async (name, desc, isbn, price, file) => {
    try {
        // Create a reference for the file in storage
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${file.name}`);

        // Upload the file to storage
        const uploadTask = uploadBytes(imageRef, file);

        // Wait for the upload task to complete
        await uploadTask;

        // Once upload is complete, fetch the download URL
        const downloadUrl = await getDownloadURL(imageRef);

        // Add data to Firestore with the download URL
        await addDoc(collection(firestore, "books"), {
            bookName: name,
            description: desc,
            isbnNumber: isbn,
            price: Number(price),
            imageUrl: downloadUrl,
            userUId: currentUser.uid,
            userImage: currentUser.photoURL
        });

        console.log("Upload and Firestore update successful");
    } catch (error) {
        console.error("Error adding data to Firestore:", error);
        // Handle error (e.g., display error message to user)
    }
};


  const getDataFromFirestore = ()=>{
    return getDocs(collection(firestore, "books"))
  }
     

  

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        loginInWithEmailAndPassword,
        googleSignIn,
        userSignOut,
        addDataInFirestore,
        setName,
        getDataFromFirestore,
        name,
        isLoggedIn,
      }}
    >
      {props.children}
      
    </FirebaseContext.Provider>
  );
};
