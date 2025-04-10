"use client";
import { useState, useContext, createContext } from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "@/app/firebase";
import { Collections } from "@/types/enums/collections";
import { collection, getDocs } from "firebase/firestore";
import { Post } from "@/types/interfaces/post";

const AppContext = createContext({
  isLogIn: false,
  onLogout: () => {},
  onLogin: (user: string, password: string) => {},
  setIsLogIn: (isLogIn: boolean) => {},
  getPost: () => Promise<Post[] | undefined>,
});

export const useAppContext = () => useContext(AppContext);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [allPosts, setAllPosts] = useState<Post[] | []>([]);

  const getPosts = async () => {
    const postsCollection = collection(db, Collections.POSTS);
    const posts: Post[] = [];

    try {
      const postsSnapshot = await getDocs(postsCollection);
      postsSnapshot.forEach((document) => {
        const { id } = document;
        const { title, date, img } = document.data();
        const postObject = { id, title, date, img };
        posts.push(postObject);
      });
      setAllPosts(posts);
      return posts;
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  const onLogin = async (user: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, user, password);
      setIsLogIn(true);
      return true;
    } catch {
      return false;
    }
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      setIsLogIn(false);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <AppContext.Provider
      // @ts-ignore
      value={{ isLogIn, onLogin, onLogout, setIsLogIn, getPosts, allPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
