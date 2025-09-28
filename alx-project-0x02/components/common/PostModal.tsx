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
        <form onSubmit={handleSubmit}>
            <label>Enter title</label>
            <input type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
            />

            <label>Enter Content</label>
            <input type="text"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Close</button>
        </form>
     )


}

