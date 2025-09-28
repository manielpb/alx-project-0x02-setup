import React, { useState} from "react";
import Card from "@/components/common/Card";
import { CardProps } from "@/interfaces";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

export default function(){
  const [formData, setFormData] = useState<CardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handlePost(newPost: CardProps) {
    setFormData(newPost);
    setIsModalOpen(false)
  }

 


    return (
        <>
        <Header />
          <h1>welcome to home page</h1>
          <Card title="Property 1" content="choose this fast" />
          {formData && (
             <Card title={formData.title} content={formData.content} />
          )}
          <button onClick={() => setIsModalOpen(true)}>Add Post</button>

          {isModalOpen && (
            <PostModal 
              onSubmit={handlePost}
              onClose = {()=> setIsModalOpen(false)}
            />
          )}
         
          
        </>
    );
}