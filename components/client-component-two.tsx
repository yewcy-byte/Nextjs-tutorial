"use client";
import {useState} from "react";

export const ClientComponentTwo = () =>{
    const [name,setName] = useState("John Doe");
    return <h1>Client Component Two</h1>
}