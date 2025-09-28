import { UserProps } from "@/interfaces";

export default function UserCard({name, email, address}: UserProps){
    return(
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-black">  {name}</h2>;
            <p className="text-sm text-gray-600 mb-1">{email}</p>;
            <p className="text-sm text-gray-500">{address.street}, {address.city}</p>
        </div>
    );
}