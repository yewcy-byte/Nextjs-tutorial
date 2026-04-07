import Image from "next/image";
import images, {imagedata} from "../metadata";


export default function photopage ({params,
}:{
    params: Promise <{id:string}>;
}){
    const {id} = await params;
    const photo: imagedata = images.find((p) => p.id === id)!;
    return (
        <div className = "container mx-auto my-10">
            <div className></div>
        </div>
    )
}
})