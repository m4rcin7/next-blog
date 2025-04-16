"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/utils/actions"; 
import { Post } from "@/types/interfaces/post"; 

const SectionPostCart = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const fetchedPosts = (await getPosts()) || [];
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div>
                <Image src={post.img} alt={post.title} />
              </div>
              <div>
                <h3>{post.title}</h3>
                <h4>{post.date}</h4>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default SectionPostCart;
