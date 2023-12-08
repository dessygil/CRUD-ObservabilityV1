"use client";
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost: React.FC = () => {
    const [name, setName] = useState('');
    const [header, setHeader] = useState('');
    const [content, setContent] = useState('');

    const handleCreatePost = () => {
        const postData = {
            name: name,
            header: header,
            content: content,
        };

        axios.post('http://localhost:8080/post', postData)
            .then((response) => {
                console.log('Post created successfully:', response.data);
                setName('');
                setHeader('');
                setContent('');
            })
            .catch((error) => {
                console.error('Failed to create the post', error);
            });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full text-black px-3 py-2 border rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="header" className="block text-gray-600 font-semibold mb-2">
                        Header
                    </label>
                    <input
                        type="text"
                        id="header"
                        className="w-full px-3 text-black py-2 border rounded-lg"
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="content" className="block text-black font-semibold mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="w-full px-3 text-black py-2 border rounded-lg"
                        rows={5}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    onClick={handleCreatePost}
                >
                    Create Post
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
