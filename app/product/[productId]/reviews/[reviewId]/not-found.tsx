"use client";



import { usePathname } from "next/navigation";



export default function Notfound (){

    const pathname = usePathname();
    const productId = pathname.split("/")[2];
const reviewId = pathname.split("/")[4];

    return(
        <div>
            <h2>Review {reviewId}not found</h2>
            <p>Cannot find la pundeh for product {productId}</p>
        </div>
    );
}