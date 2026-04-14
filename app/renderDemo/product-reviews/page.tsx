import {Suspense} from "react";

import {Product} from "../components/product";
import {Reviews} from "../components/reviews";

export default function ProductReviewsPage(){
    return (
        <div>
        <h1>Product Reviews</h1>
        <Suspense fallback ={<p>Loading...</p>}>
<Product  />
 </Suspense>
 <Suspense fallback ={<p>Loading...</p>}>
        <Reviews />
 </Suspense>
        </div>
    );
}

