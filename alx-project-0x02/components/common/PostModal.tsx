import { CardProps, PostModalProps } from "@/interfaces"
import { useState } from "react"


export default function PostModal({onSubmit, onClose}: PostModalProps){
   
 const [formData, setFormData] =  useState<CardProps>({
        title: "",
        content: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value } = e.target;
        setFormData( (prev)=>({...prev, [name]: value}));
     }

     function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        onSubmit(formData);
        setFormData({ title: "", content: ""});
     }

     
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 p-6 relative animate-slide-in">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="text-black w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter content"
            className="text-black w-full border border-gray-300 rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <div className="flex justify-end gap-3 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2 bg-red-400 text-white rounded-lg shadow hover:bg-red-500 transition">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

