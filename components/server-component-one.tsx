import fs from "fs";
import { ServerComponentTwo } from "@/components/server-component-two";
import { ClientComponentOne } from "@/components/client-component-one";




export const ServerComponentOne = () => {
    return (
        <div>
            <h1>Server Component One</h1>
        </div>
    );

    fs.readFileSync("src/components/server-component-one.tsx", "utf-8");  
}