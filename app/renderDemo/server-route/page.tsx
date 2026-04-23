import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "../components/ImageSlider";


export default function ServerRoutePage(){
    const result = serverSideFunction();
    return(
        <>
        <h1>Server route {result}</h1>
        <p>Client-only utilities cannot run in this server route.</p>
        <ImageSlider />
        
        </>

    );
   
}