import {Metadata} from "next";
import Link from "next/link";


export const metadata: Metadata ={
    title: {
        absolute:"Blog",
    }
};

export  default async function Blog(){

    await new Promise((resolve) =>{
        setTimeout(()=>{resolve("Intentional delay");

        },2000);
    });

    return (
    <>
    <h1>My Blog</h1>
    <Link href="/">Home</Link>
    </>
    

    );
}