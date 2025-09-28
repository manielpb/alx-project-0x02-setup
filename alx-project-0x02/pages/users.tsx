import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

type UsersPageProps = {
    users: UserProps[];
}

export default function UsersPage({ users}: UsersPageProps){
    return (
        <>
            <Header />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">users</h1> 
                {users.map( (user) => (
                    <UserCard
                        key={user.name}
                        name={user.name}
                        email={user.email}
                        address={user.address}
                    />
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const users: UserProps[] = data.map((user: any) => ({
        name: user.name,
        email: user.email,
        address: user.address,
    }));

    return {
        props: {users},
    };
};