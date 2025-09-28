import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com";

export default function(){
    useEffect ( () => {
        const fetchPosts = async () => {
            const response = await fetch(`${url}/posts`);
            const posts = await response.json();
        };
    })
}