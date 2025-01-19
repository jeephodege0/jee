"use client"

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Component from "../jee-planner-dark";
import Login from "../components/Login";

export default function SyntheticV0PageForDeployment() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user ? <Component /> : <Login />;
}
