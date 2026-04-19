import fs from "fs";



export const ServerComponentTwo = () => {
    return <h1>Server Component Two</h1>

    fs.readFileSync("src/components/server-component-two.tsx", "utf-8");  
}