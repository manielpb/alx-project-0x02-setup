import Link from "next/link"

export default function Header(){

    return(
        <>
            <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
                <nav className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="space-x-4">
                        <Link href="/home" className="hover:underline">Home</Link>
                        <Link href="/about" className="hover:underline">About</Link>
                        <Link href="/posts" className="hover:underline">Posts</Link>
                        <Link href="/users" className="hover:underline">Users</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}
