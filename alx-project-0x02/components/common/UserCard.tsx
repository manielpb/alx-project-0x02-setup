import { UserProps } from "@/interfaces";

export default function UserCard({name, email, address}: UserProps){
    return(
        <div>
            <h1> User Name: {name}</h1>;
            <p>User email: {email}</p>;
            <p>User address: {address}</p>
        </div>
    )
}