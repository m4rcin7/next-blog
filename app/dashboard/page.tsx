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
  allPosts: Post[];
  getPosts: () => Promise<void>;
  onLogin: (user: string, password: string) => Promise<boolean>;
  onLogout: () => Promise<boolean>;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType>({
  isLogIn: false,
  allPosts: [],
  getPosts: async () => {},
  onLogin: async () => false,
  onLogout: async () => false,
  setIsLogIn: () => {},
});

export const useAppContext = () => useContext(AppContext);

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    try {
      const snapshot = await getDocs(collection(db, Collections.POSTS));
      const posts = snapshot.docs.map((doc) => {
        const { title, date, img } = doc.data();
        return { id: doc.id, title, date, img } as Post;
      });
      setAllPosts(posts);
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
      } catch (error) {
        console.error("Login error:", error);
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
    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ isLogIn, allPosts, getPosts, onLogin, onLogout, setIsLogIn }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
