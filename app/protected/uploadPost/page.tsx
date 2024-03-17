'use client'
import {useState} from 'react';
import Link from 'next/link'
export default function page(){
// stuck in that, i need an async component to use the server
// but i need to use the client to use the state
    function handleClick() {
        console.log("increment like count")
      }
    function submitPost(){
        console.log("submitting post")
    }
    return (
        <>
            <div className="cursor-pointer bg-blue-500 text-white p-2 mb-4" onClick={handleClick}>New Post</div>
            <Link href="/protected/posts" className="text-blue-500">View Posts
            </Link>
                <div>
                    <input className="border border-gray-300 rounded-md p-2 mb-4" type="text" placeholder="Title" />
                    <textarea className="border border-gray-300 rounded-md p-2 mb-4" placeholder="Description" />
                    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={submitPost}>Submit Post</button>
                </div>
        </>
    );
}