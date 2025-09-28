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
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">welcome to home page</h1>
          
          {formData && (
             <Card title={formData.title} content={formData.content}  />
          )}
          <div className="flex justify-center items-center">
             <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition ">Add Post</button>
          </div>
         

          {isModalOpen && (
            <PostModal 
              onSubmit={handlePost}
              onClose = {()=> setIsModalOpen(false)}
            />
          )}
         
          
        </>
    );
}