import { createContext, useContext, useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , onAuthStateChanged, signOut} from "firebase/auth"


export const FirebaseContext = createContext();

const firebaseConfig = {
    apiKey: "AIzaSyBVhbkaEZinip4g_p53Q9s3FedVXRYKaIo",
    authDomain: "bookify-167b4.firebaseapp.com",
    projectId: "bookify-167b4",
    storageBucket: "bookify-167b4.appspot.com",
    messagingSenderId: "169670213142",
    appId: "1:169670213142:web:911dbb3fede0f95ae17f37"
};
  

export  const useFirebase = ()=> useContext(FirebaseContext)

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid
                setUser(true)
                console.log(uid)
            } else{
                setUser(false)
            }
        })
    }, [])

    const signUpUserWithEmailAndPassword = (email, password) =>(createUserWithEmailAndPassword(auth, email, password ))
    
    const loginInWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password) 
    
    const googleSignIn = () => signInWithPopup(auth, provider)
    .then((res) => console.log(res))
    .catch((err) => console.log("Error Caught during google auth", err))

    const isLoggedIn = user ? true : false ; 

    const userSignOut = () => signOut(auth).then((res)=> console.log("LogOut Success"))
    
    return (
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword, loginInWithEmailAndPassword, googleSignIn, isLoggedIn, userSignOut }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}