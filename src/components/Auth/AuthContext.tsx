import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import {
  User,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signInWithGithub = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Github:", error);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signInWithGoogle, signInWithGithub, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
