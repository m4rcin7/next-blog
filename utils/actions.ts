import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "@/app/firebase";
import { Collections } from "@/types/enums/collections";
import { Post } from "@/types/interfaces/post";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function getPosts() {
  const postsCollection = collection(db, Collections.POSTS);
  const posts: Post[] = [];
  try {
    const postsSnapshot = await getDocs(postsCollection);
    postsSnapshot.forEach((document: any) => {
      const { id } = document;
      const { title, date, img } = document.data();
      const postObject = { id, title, date, img };
      posts.push(postObject);
    });

    return posts;
  } catch (error) {
    console.error("error", error);
  }
}

export async function onLogin(user: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, user, password);
    return true;
  } catch {
    return false;
  }
}

export async function addPost(newPost: Post) {
  try {
    const postsCollection = collection(db, Collections.POSTS);
    const postRef = await addDoc(postsCollection, {
      title: newPost.title,
      date: newPost.date,
      img: newPost.img,
    });
    console.log("added", postRef.id);
    return postRef.id;
  } catch (error) {
    console.error("error added", error);
    return null;
  }
}

export async function deletePost(postId: string) {
  try {
    const postDocRef = doc(db, Collections.POSTS, postId);
    await deleteDoc(postDocRef);
    console.log("deleted", postId);
    return true;
  } catch (error) {
    console.error("error deleting", error);
    return false;
  }
}

export async function editPost(postId: string, updatedPost: Partial<Post>) {
  try {
    const postDocRef = doc(db, Collections.POSTS, postId);
    await updateDoc(postDocRef, updatedPost);
    console.log("updated", postId);
    return true;
  } catch (error) {
    console.error("error updating", error);
    return false;
  }
}
