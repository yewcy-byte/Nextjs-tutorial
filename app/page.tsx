import Link from "next/link";



export default function Home(){
    return (
        <>
        <h1>Welcome Home</h1>
        <Link href="/blog">Blog</Link>
        <br></br>
        <Link href="/product">Products</Link>
        <br></br>
        <br></br>

        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
               <br></br>

        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>

        <Link href = "/renderDemo/dashboard">Dashboard</Link>

        <Link href = "/renderDemo/about">About</Link>

        </>
    ) ;
}