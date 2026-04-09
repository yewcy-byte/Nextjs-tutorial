import Image from "next/image";
import images, {imagedata} from "../metadata";


export default async function PhotoPage ({params,
}:{
    params: Promise <{id:string}>;
}) {
    const {id} = await params;
    const photo: imagedata = images.find((p: imagedata) => p.id === id)!;
    return (
        <div className = "container mx-auto my-10">
            <div className = "w-1/2 mx-auto">
<div>
    <h1 className = "text-center text-3xl font-bold my-4">{photo.name}</h1>
    </div>
    <Image 
    src={photo.src} 
    alt={photo.name}
    className="w-full object-cover aspect-square" 
    />

    <div className = "bg-white py-4">
            <h3>{photo.photographer}</h3>
            <p>{photo.location}</p>
    </div>
</div>
        </div>
    );

}               