import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    id: string;
    name: string;
    header: string;
    content: string;
}

interface PostProps {
    post: Post;
    onDelete: () => void;
}

const SinglePost: React.FC< PostProps > = ({ post, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleDelete = async () => {

        if (isDeleting) {
            return; 
        }

        setIsDeleting(true);
        
        try {
            await axios.delete(`http://localhost:8080/post/${post.id}`);
            console.log('Post deleted successfully');
            onDelete();
        } catch (error) {
            console.error('Failed to delete the post', error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md my-4">
            <h2 className="text-xl text-black font-semibold">{post.name}</h2>
            <h2 className="text-xl text-black font-semibold">{post.header}</h2>
            <p className="mt-2 text-black">{post.content}</p>
            <button
                onClick={handleDelete}
                className="mt-4 bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    );
};

export default SinglePost;
