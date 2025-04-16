"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./section-post.module.css";
import { getPosts } from "@/utils/actions";
import { Post } from "@/types/interfaces/post";

const SectionPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const posts = (await getPosts()) || [];
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles["container-posts"]}>
      {posts.map((post, index) => (
        <Link key={index} href="/" className={styles["post-link"]}>
          <div className={styles.post}>
            <div className={styles["post-shaddow"]}></div>
            <div className={styles["post-img"]}>
              <Image src={post.img} fill alt={post.title} />
            </div>
            <div className={styles["post-description"]}>
              <h3>{post.title}</h3>
              <h4>{post.date}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SectionPost;
