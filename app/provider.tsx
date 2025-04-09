"use client";

import React, {
  useState,
  useCallback,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "@/app/firebase";
import { Collections } from "@/types/enums/collections";
import { collection, getDocs } from "firebase/firestore";
import { Post } from "@/types/interfaces/post";

interface AppContextType {
  isLogIn: boolean;
  onLogin: (user: string, password: string) => Promise<boolean>;
  onLogout: () => Promise<boolean>;
  setIsLogIn: (isLogIn: boolean) => void;
  getPosts: () => Promise<Post[] | void>;
}

const AppContext = createContext<AppContextType>({
  isLogIn: false,
  onLogin: async () => false,
  onLogout: async () => false,
  setIsLogIn: () => {},
  getPosts: async () => [],
});

export const useAppContext = () => useContext(AppContext);

const Provider = ({ children }: { children: ReactNode }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  const getPosts = useCallback(async (): Promise<Post[] | void> => {
    try {
      const snapshot = await getDocs(collection(db, Collections.POSTS));
      const posts = snapshot.docs.map((doc) => {
        const { title, date, img } = doc.data();
        return { id: doc.id, title, date, img } as Post;
      });
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  const onLogin = useCallback(
    async (user: string, password: string): Promise<boolean> => {
      try {
        await signInWithEmailAndPassword(auth, user, password);
        setIsLogIn(true);
        return true;
      } catch {
        return false;
      }
    },
    []
  );

  const onLogout = useCallback(async (): Promise<boolean> => {
    try {
      await signOut(auth);
      setIsLogIn(false);
      return true;
    } catch {
      return false;
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ isLogIn, onLogin, onLogout, setIsLogIn, getPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
