import Link from "next/link"

export default function Header(){

    return(
        <>
            <header>
                <nav>
                  <Link href="/home">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/posts">Posts</Link>
                </nav>
            </header>
        </>
    );
}
