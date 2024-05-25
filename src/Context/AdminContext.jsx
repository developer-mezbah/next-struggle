"use client";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

import app from "@/utils/firebase.init";
const auth = getAuth(app);

const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
    console.log("user ovserbing runging", user);
  });


  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    return () => unsubscribe();
  }, []);
  const contextValue = {
    createUser,
    updateUserName,
    logIn,
    user,
    logOut,
    loading,
  };
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
