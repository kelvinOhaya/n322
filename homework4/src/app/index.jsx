import useAuth from "@/hooks/useAuth";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase/firebase.config";

export default function HomeScreen() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  //LOGIN
  if (user === null) {
    return <LoginPage />;
  } else {
    //HOMEPAGE
    return <HomePage user={user} />;
  }
}
