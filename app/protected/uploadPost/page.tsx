'use client'
import { createClient } from '@/utils/supabase/server';
import {useState} from 'react';
import Link from 'next/link'
export default async function page(){
    const supabase = createClient();
    const [post, setPost] = useState<any[] | null>(null)
    
    function handleClick() {
        console.log("increment like count")
      }
    function submitPost(){
        console.log("submitting post")
    }
    return (
        <>
            <div className="cursor-pointer bg-blue-500 text-white p-2 mb-4" onClick={handleClick}>New Post</div>
            <Link href="../posts/">
                <a className="text-blue-500">View Posts</a>
            </Link>
            {post && (
                <div>
                    <input className="border border-gray-300 rounded-md p-2 mb-4" type="text" placeholder="Title" />
                    <textarea className="border border-gray-300 rounded-md p-2 mb-4" placeholder="Description" />
                    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={submitPost}>Submit Post</button>
                </div>
            )}
        </>
    );
}