"use client"



import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import "./styles.css";


const navlinks = [
    {name: "Register", href:"/register"},
    {name: "Login", href:"/login"},
    {name: "Forgot Password", href:"/forgotPassword"},
];

export default function Authlayout({children}:{
    children: React.ReactNode;
}){
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return(
        <div>
            <div>
                <input value={input} onChange={(e) => setInput (e.target.value)} />
            </div>
            {navlinks.map ((link) =>{
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !=="/");
                return(<Link className={isActive? "font-bold mr-4" : "text-blue-500 mr-4"}
                href ={link.href} key={link.name}       
                style={{ display: "block", marginBottom: "8px" }}
>{link.name}</Link>

                );
            })}
            {children}
        </div>
    );
}