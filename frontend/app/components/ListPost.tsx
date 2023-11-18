"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';

interface Post {
  id: string;
  name: string;
  header: string;
  content: string;
}

const ListPost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then((response) => {
        if (Array.isArray(response.data.data.data)) {
          setPosts(response.data.data.data);
        } else {
          console.error('Response data is not an array:', response.data.data);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch posts', error);
      });
  }, []);

  const refreshPosts = () => {
    axios.get('http://localhost:8080/posts')
        .then((response) => {
            if (Array.isArray(response.data.data.data)) {
                setPosts(response.data.data.data);
            } else {
                console.error('Response data is not an array:', response.data.data);
            }
        })
        .catch((error) => {
            console.error('Failed to refresh posts', error);
        });
};

  if (posts.length === 0) {
    return <p className='text-black'>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} onDelete={refreshPosts}/>
      ))}
    </div>
  );
};

export default ListPost;
