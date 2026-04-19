import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "../components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";


export default function ServerRoutePage(){
    const result = serverSideFunction();
    const clientResult = clientSideFunction();
    return(
        <>
        <h1>Server route {result}</h1>
        <p>Client result: {clientResult}</p>
        <ImageSlider />
        
        </>

    );
   
}