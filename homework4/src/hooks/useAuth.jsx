import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase.config";

export default function useAuth() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [authMode, setAuthMode] = useState("Login");
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error in handleLogin(): ", error);
    }
    setEmail("");
    setPassword("");
  };
  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Erorr with handleSignUp(): ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error with handleLogout(): ", error);
    }
  };

  return {
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    authMode,
    setAuthMode,
    handleLogin,
    handleLogout,
    handleSignUp,
  };
}
