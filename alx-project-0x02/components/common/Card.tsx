import { type CardProps } from "@/interfaces";

export default function Card({title, content}: CardProps){
    return (
        <div className="mb-6 shadow-md border rounded-lg bg-white p-4">
              <h1>{title}</h1>
            <h1>{content}</h1>
        </div>
          
        
       
    )
}