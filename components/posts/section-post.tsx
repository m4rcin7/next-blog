"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./section-post.module.css";
import { getPosts } from "@/utils/actions";
import { Post } from "@/types/interfaces/post";

const SectionPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts || []);
    } catch (err) {
      setError("Failed to load posts.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className={styles.loader}>Loading posts...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles["container-posts"]}>
      {posts.map((post) => (
        <article className={styles.post}>
          <div className={styles["post-shaddow"]}></div>

          <div className={styles["post-img"]}>
            {post.img && (
              <Image
                src={post.img}
                fill
                alt={`Image for post: ${post.title}`}
                className={styles["post-img-el"]}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            )}
          </div>

          <div className={styles["post-description"]}>
            <h3>{post.title}</h3>
            <h4>{post.date}</h4>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SectionPost;
