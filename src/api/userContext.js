import {createContext,useState,useEffect, useContext} from 'react';
import {auth, db} from './firebase'
import{createUserWithEmailAndPassword,updateProfile,onAuthStateChanged,
signInWithEmailAndPassword,signOut,sendPasswordResetEmail} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)


export const UserContextProvider =({children}) =>{
    
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(null)
     const [error,setError] = useState("")
    
   
     useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const snapshot = await getDoc(doc(db, "wardens", user.uid))
          console.log(snapshot.data())
          setUser(snapshot.data())
        }
      });
    }, []);

    // creating user
    const createUser = async(email,password,name)=>{
        const res= createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,"wardens",(await res).user.uid),{
          fullName:name,
          email:email,
          password:password,
          status:true,
        })
     
  
}



      const loginInUser=(email,password)=>{
          signInWithEmailAndPassword(auth,email,password)
           .then((res) => {
           console.log(res)
         
            
           })
          .catch((err) => setError(err.message))
          .finally(()=>setLoading(false))
          
      }
      const logOutUser=()=>{
         signOut(auth)
      }



    return <UserContext.Provider value={{createUser}}>
          {children}
         </UserContext.Provider>
}