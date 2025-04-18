"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/utils/actions";
import { Post } from "@/types/interfaces/post";

const SectionPostCart = () => {
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

  if (isLoading) return <p>Loading posts...</p>;

  if (error) return <p>{error}</p>;

  if (posts.length === 0) return <p>No posts available.</p>;

  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <div>
            {post.img && (
              <Image
                src={post.img}
                alt={`Image for post: ${post.title}`}
                width={300}
                height={200}
                style={{ objectFit: "cover" }}
              />
            )}
            <div>
              <h3>{post.title}</h3>
              <h4>{post.date}</h4>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SectionPostCart;
