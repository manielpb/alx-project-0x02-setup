import { PostProps } from "@/interfaces";
import Posts from "@/pages/posts";
import { useState } from "react";

export default function PostCard({title, content, userId}: PostProps){
    return(
        <div className="border p-4 rounded-md shadow-sm mb-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text gray-600">{content}</p>
            <span className="text-sm text-gray-400">Posted by user {userId}</span>
        </div>
    )
}