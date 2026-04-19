"use client";
import {useState} from "react";
import { ClientComponentTwo } from "@/components/client-component-two";

import { ServerComponentOne } from "@/components/server-component-one";


export const ClientComponentOne = ({children,}:{children: React.ReactNode}) =>{
    const [name,setName] = useState("John Doe");
    return (
        <div>
            <h1>Client Component One</h1>
            {children}
        </div>
    );
}