import { type CardProps } from "@/interfaces";

export default function Card({title, content}: CardProps){
    return (
        <>
            <h1>{title}</h1>
            <h1>{content}</h1>
        </>
       
    )
}