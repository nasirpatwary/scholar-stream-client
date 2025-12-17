import { useEffect, useState } from "react";
import { AuthContext } from "../hooks/useAuth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import useAxiosPublic from "../hooks/useAxiosPublic";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic()
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    console.log("current user --->", currentUser);

    if (currentUser?.email) {
      setUser(currentUser);
      await axiosPublic.post("/login", { email: currentUser.email } );
    } else {
      setUser(null);
      await axiosPublic.get("/logout");
    }

    setLoading(false);
  });

  return () => unSubscribe();
}, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInGoogle,
    createUserProfile,
    logOut,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
